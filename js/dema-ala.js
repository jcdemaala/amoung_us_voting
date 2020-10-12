var str = "";
var vote_count = {
	Vayne : 0,
	Riven : 0,
	Yasuo : 0,
	Lucian :0,
	fiora : 0,
	Yone : 0,
	Leesin : 0,
	Nidalee : 0,
	Jhin : 0,
	Fiddlestick : 0,
};
$(document).ready(
	function(){
		$("#p1vote").click(
			function(){
				vote_count.Vayne++;
				$("#p1vote").html(vote_count.Vayne);

				}
			);
		$("#p2vote").click(
			function(){
				vote_count.Riven++;
				$("#p2vote").html(vote_count.Riven);

				}
			);
		$("#p3vote").click(
			function(){
				
				vote_count.Yasuo++;
				$("#p3vote").html(vote_count.Yasuo);

				}
			);
		$("#p4vote").click(
			function(){
				vote_count.Lucian++;
				$("#p4vote ").html(vote_count.Lucian);

				}
			);
		$("#p5vote").click(
			function(){
				vote_count.fiora++;
				$("#p5vote ").html(vote_count.fiora);

				}
			);
		$("#p6vote").click(
			function(){
				vote_count.Yone++;
				$("#p6vote ").html(vote_count.Yone);

				}
			);
		$("#p7vote").click(
			function(){
				vote_count.Leesin++;
				$("#p7vote ").html(vote_count.Leesin);

				}
			);
		$("#p8vote").click(
			function(){
				vote_count.Nidalee++;
				$("#p8vote ").html(vote_count.Nidalee);

				}
			);
		$("#p9vote").click(
			function(){
				vote_count.Jhin++;
				$("#p9vote ").html(vote_count.Jhin);

				}
			);
		$("#p10vote").click(
			function(){
				vote_count.Fiddlestick++;
				$("#p10vote ").html(vote_count.Fiddlestick);

				}
			);

		}
	);
