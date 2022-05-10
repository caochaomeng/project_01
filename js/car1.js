$(function() {

    // 全选
    $(".checkall").change(function() {
        $(".j-checkbox,.checkall").prop("checked", $(this).prop("checked"));
        if ($(this).prop("checked")) {
            $(".cart-item").addClass("check-cart-item");
        } else {
            $(".cart-item").removeClass("check-cart-item");
        }
        getSum();
    });
    $(".j-checkbox").change(function() {
        if ($(".j-checkbox:checked").length == $(".j-checkbox").length) {
            $(".checkall").prop("checked", true);
        } else {
            $(".checkall").prop("checked", false);
        }
        if ($(this).prop("checked")) {
            $(this).parents(".cart-item").addClass("check-cart-item");
        } else {
            $(this).parents(".cart-item").removeClass("check-cart-item");
        }
        getSum();
    });

    // 选择商品数量
    var count;
    var price;
    $(".increment").click(function() {
        count = $(this).siblings(".itxt").val()
        count++;
        $(this).siblings(".itxt").val(count);
        price = ($(this).parents(".p-num").siblings(".p-price").text().substr(1) * count).toFixed(2);
        $(this).parent().parent().siblings(".p-sum").text('￥' + price);
        getSum();
    });
    $(".decrement").click(function() {
        count = $(this).siblings(".itxt").val();
        if (count <= 1) {
            count = 1;
        } else {
            count--;
        }
        $(this).siblings(".itxt").val(count);
        price = ($(this).parents(".p-num").siblings(".p-price").text().substr(1) * count).toFixed(2);
        $(this).parent().parent().siblings(".p-sum").text('￥' + price);
        getSum();
    });

    $(".itxt").change(function() {
        price = ($(this).val() * ($(this).parents(".p-num").siblings(".p-price").html().substr(1))).toFixed(2);
        $(this).parents(".p-num").siblings(".p-sum").text("￥" + price);
        getSum();
    });
    getSum();

    function getSum() {
        var n = 0;
        var p = 0;
        $(".itxt").each(function(index, domEle) {
            if ($(this).parents(".p-num").siblings(".p-checkbox").children(".j-checkbox").prop("checked")) {
                n += parseInt($(domEle).val());
            }
        });
        $(".amount-sum em").text(n);
        $(".p-sum").each(function(index, domEle) {
            if ($(this).siblings(".p-checkbox").children(".j-checkbox").prop("checked")) {
                p += parseFloat($(domEle).text().substr(1));
            }
        });
        $(".price-sum em").text("￥" + p.toFixed(2));
    }
    $(".p-action a").click(function() {
        $(this).parents(".cart-item").remove();
    });
    $(".remove-batch").click(function() {
        $(".j-checkbox:checked").parents(".cart-item").remove();
        getSum();
    });
    $(".clear-all").click(function() {
        $(".cart-item").remove();
        getSum();
    });
})