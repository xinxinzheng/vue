<template>
	<div class="header" id="header">
		<header class="flex-row" >
		  	<div class="flex3 flex-row logo">
		  		<div class="logo-icon"></div>
		  		<div class="logo-msg flex1">保持冷静，继续前行</div>
		  	</div>
		  	<ul class="header-nav flex7">
		  		<li>
		  			<a>基础知识</a>
		  			<div class="header-nav-dropdown" >
						<ul class="header-nav-dropdown-container basic">
							<li >
								<a>Javascript</a>
							</li>
							<li >
								<a>Html5</a>
							</li>
							<li >
								<a>CSS3</a>
							</li>
						</ul>
					</div>
		  		</li>
		  		<li>
		  			<a>框架</a>
		  			<div class="header-nav-dropdown" >
						<ul class="header-nav-dropdown-container framework">
							<li >
								<a>Angular</a>
							</li>
							<li >
								<a>Vue</a>
							</li>
							<li >
								<a>React</a>
							</li>
						</ul>
					</div>
		  		</li>
		  		<li>
		  			<a>工具</a>
		  			<div class="header-nav-dropdown" >
						<ul class="header-nav-dropdown-container tool">
							<li >
								<a>NodeJs</a>
							</li>
							<li >
								<a>WebPack</a>
							</li>
							<li >
								<a>Grunt</a>
							</li>
							<li >
								<a>Gulp</a>
							</li>
						</ul>
					</div>
		  		</li>
		  		<div class="line"></div>
		  	</ul>
		</header>
	</div>
</template>
<script>
	$(document).delegate('.header-nav>li','mouseenter',function(evt){
		var left = this.offsetLeft , width = this.clientWidth;
		$(".header-nav .line").css({width:width,left:left});
		$(this).find(".header-nav-dropdown").slideToggle(250, function(){});
	})
	$(document).delegate('.header-nav>li','mouseleave',function(evt){
		$(".header-nav .line").css({width:'0px'});
		$(this).find(".header-nav-dropdown").slideToggle(250, function(){});
	})
</script>