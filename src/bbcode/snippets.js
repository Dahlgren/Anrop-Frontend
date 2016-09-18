const YOUTUBE_ID_REGEXP = /^.*(youtu\.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/;
const YOUTUBE_ID_REGEXP_INDEX = 2;

angular.module('bbcode').value('snippets', {
	"b": "<b>$1</b>", // Bolded text
	"u": "<u>$1</u>", // Underlined text
	"i": "<i>$1</i>", // Italicized text
	"s": "<s>$1</s>", // Strikethrough text
	"size=(12|16|20|24|28|32)": "<span style='font-size:$1px'>$2</span>", // Font Size
	"img": "<img class=\"img-responsive\" src=\"$1\" />", // Image without title
	"img=([^\\[\\]<>]+?)": "<img class=\"img-responsive\" src=\"$1\" alt=\"$2\" />", // Image with title
	"url": "<a href=\"$1\" target=\"_blank\" title=\"$1\">$1</a>", // Simple URL
	"url=([^\\[\\]<>]+?)": "<a href=\"$1\" target=\"_blank\" title=\"$2\">$2</a>", // URL with title
	"hr": function(complete, text) { // Horizontal Line
		return '<hr/>';
	},
	"youtube": function(complete, text) { // YouTube Embed
		const result = YOUTUBE_ID_REGEXP.exec(text);

		if (!result) {
			return complete;
		}

		const videoId = result[YOUTUBE_ID_REGEXP_INDEX];

		return `<div class="embed-responsive embed-responsive-16by9">
			<iframe class="embed-responsive-item" src="https://www.youtube.com/embed/${videoId}" allowfullscreen></iframe>
		</div>`;
	},
});
