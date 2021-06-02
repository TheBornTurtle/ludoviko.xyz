$("#blog-archive-button").on("click", function () {
    let archive = $('#blog-archive');
    archive.toggle();
    $(this).html((archive.is(":visible") ? "Hide" : "Show") + " archived posts");
});

$.ajax({
    dataType: "json",
    url: "/blog/src/posts.json",
    cache: false,
    success: function (json) {
        let category = window.location.hash.match(/#blog-(.+)/);
        populateBlog(json, category && decodeURI(category[1]) || "all-posts");
        forceToAnchor();
    }
});

function populateBlog(json, currentCategory) {
    const currCat = currentCategory;

    let anchors = $('#blog-cat-anchors');
    let archive = $('#blog-archive');
    let list = $('#blog-list');
    let cats = $('#blog-cats');
    anchors.html("");
    archive.html("");
    list.html("");
    cats.html("");

    // force all and featured categories to be first
    addCategory(json, cats, anchors, "All Posts", currCat);
    addCategory(json, cats, anchors, "Featured", currCat);

    for (let i = json.length - 1; i >= 0; i--) {
        let post = json[i];
        for (let cat of post.cat)
            addCategory(json, cats, anchors, cat, currCat);
        if (currCat === "all-posts" || post.cat.some(c => c.toLowerCase().replace(" ", "-") === currCat)) {
            let p = /*html*/ `
                <div class="card bg-light blog-entry rounded-0">
                    <div class="card-body">
                        <h4 class="card-title blog-title"><a class="blog-button" href="./src/${post.id}.html">${post.name}</a></h4>
                        <div class="card-text blog-summary">${post.summary}</div>
                        <span class="text-muted project-status">${post.date}</span>
                        <span class="text-muted blog-cat">${post.cat.join(", ")}</span>
                    </div>
                </div>
            `;
            if (post.archived) {
                archive.append(p);
            } else {
                list.append(p);
            }
        }
    }

    if (!archive.html())
        archive.html(`<em>There are no archived posts in this category.</em>`);
    if (!list.html())
        populateBlog(json, "all-posts");
}

function addCategory(json, cats, anchors, cat, currCat) {
    let catId = cat.toLowerCase().replace(" ", "-");
    let catAnchor = `blog-cat-${catId}`;
    if (!$(`#${catAnchor}`).length) {
        cats.append( /*html*/ `<button type="button" class="btn btn-link blog-cat-button" id=${catAnchor} ${catId === currCat ? "disabled" : ""}>${cat}</button>`);
        $(`#${catAnchor}`).on('click', function () {
            populateBlog(json, catId);
            history.replaceState(null, null, `#blog-${catId}`);
        });
        anchors.append( /*html*/ `<span class="anchor" id="blog-${catId}"></span>`);
    }
}