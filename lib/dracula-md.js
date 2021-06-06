import visit from 'unist-util-visit'

export function links() {
    return transformer

    function transformer(ast) {
        visit(ast, 'link', visitor)

        function visitor(node) {
            const data = node.data || (node.data = {})
            const props = data.hProperties || (data.hProperties = {})
            const url = node.url
            props.className = 'drac-anchor drac-text drac-text-purple drac-text-pink--hover drac-mb-sm'

            if(url.startsWith('/')) {
                return
            } else {
                props.target = '_blank'
                props.rel = 'noopener noreferrer'
                return
            }
        }
    }
}

export function heading1() {
    return transformer

    function transformer(ast) {
        visit(ast, 'heading', visitor)

        function visitor(node) {
            const data = node.data || (node.data = {})
            const props = data.hProperties || (data.hProperties = {})
            props.className = 'drac-heading drac-heading-2xl drac-text-white'
        }
    }
}

export function heading2() {
    return transformer

    function transformer(ast) {
        visit(ast, 'heading', visitor)

        function visitor(node) {
            const data = node.data || (node.data = {})
            const props = data.hProperties || (data.hProperties = {})
            props.className = 'drac-heading drac-heading-xl drac-text-white'
        }
    }
}

export function heading3() {
    return transformer

    function transformer(ast) {
        visit(ast, 'heading', visitor)

        function visitor(node) {
            const data = node.data || (node.data = {})
            const props = data.hProperties || (data.hProperties = {})
            props.className = 'drac-heading drac-heading-lg drac-text-white'
        }
    }
}

export function paragraph() {
    return transformer

    function transformer(ast) {
        visit(ast, 'paragraph', visitor)

        function visitor(node) {
            const data = node.data || (node.data = {})
            const props = data.hProperties || (data.hProperties = {})
            props.className = 'drac-text drac-line-height drac-text-white'
        }
    }
}

export function strong() {
    return transformer

    function transformer(ast) {
        visit(ast, 'strong', visitor)

        function visitor(node) {
            const data = node.data || (node.data = {})
            const props = data.hProperties || (data.hProperties = {})
            props.className = 'drac-text drac-text-bold drac-line-height drac-text-white'
        }
    }
}