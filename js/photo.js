define([], function () {
    return {
        page: 1,
        offset: 20,
        init: function () {
            var that = this;
            $.getJSON("/photo/output.json", function (data) {
                that.render(that.page, data);

                that.scroll(data);
            });
        },

        render: function (page, data) {
            var begin = (page - 1) * this.offset;
            var end = page * this.offset;
            console.log("data------->",data);
            if (begin >= data.length) return;
            var html, li = "";
            for (var i = begin; i < end && i < data.length; i++) {
                li += '<li><div class="img-box">' +
                    '<a class="img-bg" rel="example_group" href="http://ogmel1z56.bkt.clouddn.com/' + i + '"></a>' +
                    '<img lazy-src="http://ogmel1z56.bkt.clouddn.com/' + i + '" />' +
                    '</li>';
            }

            http://ogmel1z56.bkt.clouddn.com/2.jpg

            $(".img-box-ul").append(li);
            $(".img-box-ul").lazyload();
            $("a[rel=example_group]").fancybox();
        },

        scroll: function (data) {
            var that = this;
            $(window).scroll(function() {
                var windowPageYOffset = window.pageYOffset;
                var windowPageYOffsetAddHeight = windowPageYOffset + window.innerHeight;
                var sensitivity = 0;

                var offsetTop = $(".instagram").offset().top + $(".instagram").height();

                if (offsetTop >= windowPageYOffset && offsetTop < windowPageYOffsetAddHeight + sensitivity) {
                    that.render(++that.page, data);
                }
            })
        }
    }
})