(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{178:function(t,e,s){"use strict";s.r(e);var i=s(0),n=Object(i.a)({},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"content"},[t._m(0),t._v(" "),t._m(1),t._v(" "),s("p",[t._v("As described in the section "),s("router-link",{attrs:{to:"/user-docs/editing-association-contents.html"}},[t._v("Editing association")]),t._v(" of posts, besides indicating for each post or page the available translations, the widget can be integrated in any dynamic sidebar.")],1),t._v(" "),t._m(2),t._v(" "),s("p",[t._v("The output depends on your settings in the plugin configuration and on the CSS of your theme but here an example:")]),t._v(" "),t._m(3),t._v(" "),t._m(4),t._v(" "),t._m(5),t._v(" "),t._m(6),t._v(" "),s("p",[t._v("You can insert it into your posts or pages when you want to show a link to the alternative translation of the current content.")]),t._v(" "),t._m(7),t._v(" "),s("p",[t._v("This is a shortcode that renders the widget output because there are themes that you widgets also in that way.")]),t._v(" "),t._m(8),t._v(" "),s("p",[t._v("The last shortcode is also available as a block in the new Gutenberg editor. This is a first step because the UI is right now far from perfect.")]),t._v(" "),t._m(9),t._v(" "),t._m(10),t._v(" "),t._m(11),t._v(" "),t._m(12),t._v(" "),s("p",[t._v("MSLS comes with some additional API functions if you need the URL of a flag by URL for example. There is also the possibility to get the description of the blog and the permalink of the current content by language (locale):")]),t._v(" "),t._m(13)])},[function(){var t=this.$createElement,e=this._self._c||t;return e("h1",{attrs:{id:"integration-in-your-website"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#integration-in-your-website","aria-hidden":"true"}},[this._v("#")]),this._v(" Integration in your website")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"using-the-widget"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#using-the-widget","aria-hidden":"true"}},[this._v("#")]),this._v(" Using the widget")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("img",{attrs:{src:"/widgets-admin.png",alt:"Widgets admin"}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("img",{attrs:{src:"/widget-output.png",alt:"Widget output"}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"using-the-shortcodes"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#using-the-shortcodes","aria-hidden":"true"}},[this._v("#")]),this._v(" Using the shortcodes")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("The "),e("strong",[this._v("Multisite Language Switcher")]),this._v(" comes with two shortcodes:")])},function(){var t=this.$createElement,e=this._self._c||t;return e("pre",[e("code",[this._v("[sc_msls]\n")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("pre",[e("code",[this._v("[sc_msls_widget]\n")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"using-the-block"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#using-the-block","aria-hidden":"true"}},[this._v("#")]),this._v(" Using the block")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("img",{attrs:{src:"/block-editor.png",alt:"Block editor"}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"using-the-api"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#using-the-api","aria-hidden":"true"}},[this._v("#")]),this._v(" Using the API")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("It is also possible to directly use the plugin features in your theme, you can use for example the following code in the "),e("em",[this._v("header.php")]),this._v(" file of your WordPress theme.")])},function(){var t=this.$createElement,e=this._self._c||t;return e("pre",[e("code",[this._v("<?php if ( function_exists( 'the_msls' ) ) the_msls(); ?>\n")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("pre",[e("code",[this._v("$language    = get_locale();\n$flag_url    = get_msls_flag_url( $language );\n$description = get_msls_blog_description( $language );\n$locale_href = get_msls_permalink( $locale );\n")])])}],!1,null,null,null);n.options.__file="integration-website.md";e.default=n.exports}}]);