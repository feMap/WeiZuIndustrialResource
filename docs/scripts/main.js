// JavaScript Document
$(function(){
	$(".userBusinessRoom_content").hide();
	
	$(".userBusinessRoom").hover(function(){
		$(".userBusinessRoom_content").show();
	},function(){
		$(".userBusinessRoom_content").hide();
	});

	$(".weixinQR").on("click", function() {
		console.log("test");
	});

	$("#ajax_button").on("click", function() {
		var filename = $("#searchBox").val();
		console.log(filename);

		$.ajax({
			url: "data/" + filename,
			type: "GET",
			dataType: "json",
			async: true,
		}).done(function(data) {
			
			var keywordPart = "";

			$.each(data.keywords, function(index, keyword) {
				var temp = "<a>" + keyword.value + "&nbsp;</a>";
				console.log(temp);
				keywordPart += temp;
			});

			console.log(keywordPart);
			
			
			
			$("#test_Ajax").append(`
				<div class="wrapper">
					<hr class="header-main">
					<div class="section_title">
						<span style="width:15px;height:80%;background-color:#FD8502;">&nbsp;</span>
						&nbsp;${data.title}
						<span class="section_keywords">
							<span class="section_keywords_title">热门关键词：</span>
							${keywordPart}
						</span>
					</div>

					<div class="card__define card--shadow clearfix">
						<div class="card_content_pic col--3--large">
							<img src=${data.image_url} width="100%" height="auto" alt=""/>
						</div>
						<div class="card_content_left col--4">
							<div class="card_content_detail">
								<span style="font-weight:bold">冷成型机床&nbsp;</span>
								<span>冲床卷板机</span>
								<span>剪板机液压机</span>
							</div>
							<hr class="card_sep">
							<div class="card_conten_detail">
								<span style="font-weight:bold">普通机床&nbsp;</span>
								<span>车床</span>
								<span>锯床</span>
								<span>磨床</span>
							</div>
							<hr class="card_sep">
							<div class="card_conten_detail">
								<span style="font-weight:bold">数控机床&nbsp;</span>
								<a>数控车床</a>
								<a>数控加工中心</a>
								<a>数控铣床</a>
								<a>数控钻床</a>
							</div>
							<hr class="card_sep">
							<div class="card_conten_detail">
								<span style="font-weight:bold">特种机床&nbsp;</span>
								<a>线切割激光切割</a>
								<a>水切割</a>
								<a>电火花加工</a>
							</div>
							<hr class="card_sep">
						</div>
						<div class="card_seperate_line col--1">&nbsp;</div>
						<div class="card_content_right col--4">
							<span class="recommendCom_title">推荐企业</span>
							<table class="table font-sm2">
								<thead>
									<tr>
									<th>#</th>
									<th>公司名称</th>
									<th>公司地址</th>
									</tr>
								</thead>
								<tbody>
									<tr>
										<th scope="row">1</th>
										<td>湖南万物工业软件有限公司</td>
										<td>湖南</td>
									</tr>
									<tr>
										<th scope="row">2</th>
										<td>山东l临清亿联轴承有限公司</td>
										<td>山东</td>
									</tr>
									<tr>
										<th scope="row">3</th>
										<td>河北泊头市宏远压瓦机厂</td>
										<td>河北</td>
									</tr>
								</tbody>
							</table>
						</div>
					</div>
				</div>
				`);
		});
	});
});
