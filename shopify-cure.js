window.open = function(t) {
    return function(e, a, i) {
        return e.indexOf("moonultra") < 0 ? t.call(window, e, a, i) : (console.log(e), window.location.href = e, null)
    }
}(window.open);
var Cart = function() {
    var t, e, a = {
            api: {
                domain: "checkout.helzt.com",
                apiKey: "2164e213db00eb4e717ec262e7f4e2b2",
            },
            classes: {
                visible: "is-active"
            }
        },
        i = ".cc_product_holder",
        n = ".shopify-buy-cart-wrapper",
        o = ".toggle",
        l = {
            visible: !1
        },
        c = function() {
            console.log("Cart.openCart()"), $(n).addClass(a.classes.visible), l.visible = !0, $(document).trigger("cart/open")
        },
        s = function() {
            console.log("Cart.closeCart()"), $(n).removeClass(a.classes.visible), l.visible = !1, $(document).trigger("cart/close")
        };
    return {
        init: function() {
            console.log("Cart.init()"), $.each(a.api, function(t, e) {
                    $('meta[name="shopify--' + t + '"]').length && (a.api[t] = $('meta[name="shopify--' + t + '"]').attr("content"))
                }), t = ShopifyBuy.buildClient({
                    apiKey: a.api.apiKey,
                    domain: a.api.domain,
                    appId: a.api.appId
                }), e = ShopifyBuy.UI.init(t),
                function() {
                    if (console.log("Cart.build()"), !$(i).length) return !1;
                    $(i).each(function() {
                        var t = $(this),
                            a = t.attr("id"),
                            i = t.data("varient");
                        e.createComponent("product", {
                            id: a,
                            variantId: i,
                            toggles: [{
                                node: document.getElementById("toggle")
                            }, {
                                node: document.getElementById("toggle_mobile")
                            }],
                            node: t[0],
                            moneyFormat: "{{amount}}",
                            options: {
                                product: {
                                    iframe: !1,
                                    contents: {
                                        title: !1,
                                        variantTitle: !1,
                                        price: !1,
                                        options: !1,
                                        description: !1,
                                        quantity: !1,
                                        button: !0,
                                        img: !1,
                                        imgWithCarousel: !1
                                    },
                                    text: {
                                        button: "ADD TO CART",
                                        outOfStock: "Out of Stock",
                                        unavailable: "Unavailable"
                                    },
                                    order: ["button"],
                                    templates: {
                                        button: '<button {{#data.buttonDisabled}}disabled{{/data.buttonDisabled}} class="{{data.classes.product.button}} {{data.buttonClass}}" data-element="product.button" >{{data.buttonText}}</button>'
                                    },
                                    events: {
                                        addVariantToCart: function(t) {
                                            c()
                                        },
                                        updateQuantity: function(t) {
                                            c()
                                        },
                                        openModal: function(t) {},
                                        openOnlineStore: function(t) {},
                                        openCheckout: function(t) {}
                                    }
                                },
                                cart: {
                                    iframe: !1,
                                    text: {
                                        title: "Cart",
                                        empty: "Shopping cart is empty.",
                                        button: "Proceed to secure checkout",
                                        total: "Total",
                                        notice: "Shipping calculated at checkout",
                                        noteDescription: "Special instructions for seller"
                                    },
                                    events: {
                                        openCheckout: function(t) {},
                                        updateItemQuantity: function(t) {
                                            c()
                                        }
                                    },
                                    templates: {
                                        title: '<div class="shopify-buy__cart__header"><div class="shopify-buy__cart__title"><div class="text-block-4">CART</div></div><a href="#" class="shopify-buy__btn--close w-button">x</a></div><div class="cart_line_cc"></div><div class="cart_item_container">',
                                        lineItems: '{{#data.isEmpty}}<p class="shopify-buy__cart-empty-text" data-element="cart.empty">Your cart is empty</p>{{/data.isEmpty}}{{{data.lineItemsHtml}}}\t',
                                        footer: '{{^data.isEmpty}}</div><div class="shopify-buy__cart-bottom"><div class="cart_line_cc"></div><div class="shopping_footer_container"><div class="cc_price"><p class="shopify-buy__cart__subtotal__text">Total</p><p class="shopify-buy__cart__subtotal__price">${{{data.formattedTotal}}}</p></div><a type="button" target="_blank" id="checkout_now" class="shopify-buy__btn shopify-buy__btn--cart-checkout" >Checkout</a><p class="shipping_note">Taxes and shipping calculated at checkout</p></div></div>{{/data.isEmpty}}'
                                    },
                                    text: {
                                        total: "Subtotal",
                                        button: "Proceed to secure checkout",
                                        shipping: "Shipping calculated at checkout"
                                    },
                                    contents: {
                                        note: !0
                                    }
                                },
                                popup: !1,
                                modal: {},
                                productSet: {},
                                toggle: {
                                    sticky: !1,
                                    iframe: !1,
                                    contents: {
                                        count: !0,
                                        icon: !1,
                                        title: !0
                                    },
                                    order: ["title", "count"],
                                    templates: {
                                        title: '<div class="link-navigation buy">Cart</div>',
                                        count: '<div class="cart">{{{data.count}}}</div>'
                                    }
                                },
                                modalProduct: {},
                                option: {
                                    templates: {
                                        option: '<div class="" data-element="option.raio"><label class=" {{#data.onlyOption}}{{data.classes.option.hiddenLabel}}{{/data.onlyOption}}" data-element="option.label">{{data.name}}</label><div class="" data-element="option.wrapper"><select class="{{data.classes.option.select}}" name="{{data.name}}" data-element="option.select" style="width:100%;">{{#data.values}}<option {{#selected}}selected{{/selected}} value="{{name}}">{{name}}{{stock}}</option>{{/data.values}}</select></div></div>'
                                    }
                                },
                                lineItem: {
                                    contents: {
                                        image: !0,
                                        variantTitle: !1,
                                        title: !0,
                                        price: !1,
                                        priceWithDiscounts: !1,
                                        quantity: !0,
                                        quantityIncrement: !0,
                                        quantityDecrement: !0,
                                        quantityInput: !0
                                    },
                                    templates: {
                                        image: '<div class="cart_image_cc"><img class="{{data.classes.product.img}}" alt="{{data.lineItemImage}}" src="{{data.lineItemImage}}" data-element="product.img" /></div>',
                                        title: '<div class="cart_product_title_cc"><span class="{{data.classes.lineItem.itemTitle}}" data-element="lineItem.itemTitle">{{data.title}}</span><span class="{{data.classes.lineItem.variantTitle}}" data-element="lineItem.variantTitle">{{data.variantTitle}}</span><span class="{{data.classes.lineItem.price}}" data-element="lineItem.price">${{{data.formattedPrice}}}</span>',
                                        price: "",
                                        quantity: '<div class="{{data.classes.lineItem.quantity}}" data-element="lineItem.quantity" style="margin-bottom: 0px;"><button class="{{data.classes.lineItem.quantityButton}} {{data.classes.lineItem.quantityDecrement}}" type="button" data-line-item-id="{{data.id}}" data-element="lineItem.quantityDecrement">-</button><input class="{{data.classes.lineItem.quantityInput}}" type="number" min="0" aria-label="Quantity" data-line-item-id="{{data.id}}" value="{{data.quantity}}" data-element="lineItem.quantityInput"><button class="{{data.classes.lineItem.quantityButton}} {{data.classes.lineItem.quantityIncrement}}" type="button" data-line-item-id="{{data.id}}" data-element="lineItem.quantityIncrement">+</button></div></div>'
                                    }
                                }
                            }
                        })
                    })
                }(), $(document).on("click", function(t) {
                    var e = $(t.target);
                    e.is(n) || e.closest(n).length || e.is(o) || e.closest(o).length || s()
                }).on("click", ".shopify-buy__btn--close", function() {
                    s()
                }).on("click", ".shopify-buy__btn", function() {}).on("click", o, function() {
                    c()
                })
        }
    }
}();
$(document).ready(function() {
    Cart.init()
});