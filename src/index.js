import m from "mithril"
import "./styles.css"

let root = document.body

// Small Components

let Navbar = {
    view: function() {
        return m("nav", {class: 'navbar'},  [
            m("a", {href: "#!/home", class: "btn btn-green"}, "Home"),
            m("a", {href: "#!/page1", class: "btn btn-green"}, "Page 1"),
            m("a", {href: "#!/page2", class: "btn btn-green"}, "Page 2")
        ])
    }
}

let Contact = {
    view: function() {
        return m("div", {class: 'contact'},  [
            m("p", {class: ""}, "Site 1"),
            m("p", {class: ""}, "Site 2")
        ])
    }
}

// Main Components

let Header = {
    view: function() {
        return m("header", {class: "header"}, [
            m(Navbar)
        ])
    }
}

let Main = {
    view: function(vnode) {
        return m("main", {class: "main-container"}, [
            m("h1", {class: "text-4xl"}, vnode.attrs.title),
            m("div", {class: "flex md:flex-none"}, [
                m("button", {class: "btn btn-blue md:flex-grow-0 flex-grow"}, "hello there")
            ])
        ])
    }
}

let Footer = {
    view: function() {
        return m("footer", {class: "footer"}, [
            m(Contact)
        ])
    }
}

// Pages

let Home = {
    view: function() {
        return m("div", {class: "app"}, [
            m(Header),
            m(Main, {title: "Home"}),
            m(Footer)
        ])
    }
}

let Page1 = {
    view: function() {
        return m("div", {class: "app"}, [
            m(Header),
            m(Main, {title: "Page 1"}),
            m(Footer)
        ])
    }
}

let Page2 = {
    view: function() {
        return m("div", {class: "app"}, [
            m(Header),
            m(Main, {title: "Page 2"}),
            m(Footer)
        ])
    }
}

m.route(root, "/home", {
    "/home": Home,
    "/page1": Page1,
    "/page2": Page2
})
