<template>
<div class="reports-nav">
	<ul>
		<li>
			<a href="/reports/" title="报告频道">行业报告</a>
		</li>
		<!-- {{#each reportClassMenu}} -->
		<li>
			<a href="/reports/1/" title="1">测试报告</a>
		</li>
		<!-- {{/each}} -->
	</ul>
	<div class="searchBox">
		<input class="search-keyword" type="text" name="keyword" id="keyword" value="" placeholder="请输入报告关键词" /><button class="search-btn">搜索</button>
		<span class="hotkey"><strong>&nbsp;热搜关键词：</strong><a href="#">中国制造2025</a><a href="#">数据中国</a><a href="#">虚拟现实</a><a href="#">充电桩</a></span>
	</div>
</div>
</template>