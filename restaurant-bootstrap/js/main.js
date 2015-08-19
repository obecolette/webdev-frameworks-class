$('#someTab').tab('show');

$('a[data-toggle="tab"]').on('shown.bs.tab', function (e) {
  e.target // newly activated tab
  e.relatedTarget // previous active tab
});

$('#recent').pongstgrm({

	accessId: YourAccessID,
	accessToken : YourAccessToken,
	show: 'recent', // 'recent', 'feed', 'liked', 'user'
	count : 16, // 1(min) - 40(max), instagram limits the maximum number of photos to 40
	pager : true // true or false (enables/disable load more button)
});
