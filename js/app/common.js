; (function (win, $) {

	var animateElement = function () {
    var el = $('[data-animate]');
    el.each(function () {
      var $this = $(this),
        thisOffSetTop = $this.offset().top,
        windowScroll = $(window).scrollTop(),
        scrollPoint = windowScroll + $(window).innerHeight();

      if (thisOffSetTop < scrollPoint) {
        $this.addClass('fade-active');
      }
    });
  };

	var setTransitionDelayElement = function() {
    var elementArea = $('.js-delay-element');
    elementArea.each(function() {
      var arrDelay = $(this).find('[data-animate]');
      arrDelay.each(function(index, item) {
        $(item).css('transition-delay', 0.3 + 's')
      })
    })
  }

	var splitText = function() {
    const sectionTitles = document.querySelectorAll('.text-split-line');
    const targets = Array.prototype.concat(sectionTitles);

    const splits = new SplitType(targets,{
      types: 'lines'
    })

    Array.prototype.forEach.call(splits.lines,function(line){
      let text = line.innerText;
      line.innerHTML = '<span>'+ text +'</span>';
    })
  }

  var setTransitionDelayLine = function() {
    var titleAreaLine = $('.js-split-line');
    titleAreaLine.each(function() {
      var arrLine = $(this).find('.line span');
      arrLine.each(function(index, item) {
        $(item).css('transition-delay', index * 0.25 + 's')
      })
    })
  }

  var showTextSplit = function() {
    var element = $('.js-split-line');
    element.each(function () {
      var $this = $(this),
        thisOffSetTop = $this.offset().top,
        scrollTop = $(window).scrollTop();

      if(scrollTop > thisOffSetTop - 4/5*$(window).innerHeight()) {
        $this.addClass('is-active');
      }
    });
  }

	$(win).on('scroll', function () {
		animateElement();
		showTextSplit();
	});

	$(win).on('load', function () {
		animateElement();
		splitText();
		setTransitionDelayElement();
		setTransitionDelayLine();
		showTextSplit();
	});

	$(win).on('resize', function () {
		setTransitionDelayElement();
		setTransitionDelayLine();
	});

})(window, window.jQuery);
