// -------------------------------------------------------------------
// markItUp!
// -------------------------------------------------------------------
// Copyright (C) 2008 Jay Salvat
// http://markitup.jaysalvat.com/
// -------------------------------------------------------------------
// Textile tags example
// http://en.wikipedia.org/wiki/Textile_(markup_language)
// http://www.textism.com/
// -------------------------------------------------------------------
// Feel free to add more tags
// -------------------------------------------------------------------
mySettings = {
	previewParserPath:	'/markitup/preview/',
	onShiftEnter:		{keepDefault:false, replaceWith:'\n\n'},
	markupSet: [
		{name:'Heading 1', key:'1', openWith:'h1(!(([![Class]!]))!). ', placeHolder:'Your title here...' },
		{name:'Heading 2', key:'2', openWith:'h2(!(([![Class]!]))!). ', placeHolder:'Your title here...' },
		{name:'Heading 3', key:'3', openWith:'h3(!(([![Class]!]))!). ', placeHolder:'Your title here...' },
		{name:'Heading 4', key:'4', openWith:'h4(!(([![Class]!]))!). ', placeHolder:'Your title here...' },
		{name:'Heading 5', key:'5', openWith:'h5(!(([![Class]!]))!). ', placeHolder:'Your title here...' },
		{name:'Heading 6', key:'6', openWith:'h6(!(([![Class]!]))!). ', placeHolder:'Your title here...' },
		{name:'Paragraph', key:'P', openWith:'p(!(([![Class]!]))!). '},
		{separator:'---------------' },
		{name:'Bold', key:'B', closeWith:'*', openWith:'*'},
		{name:'Italic', key:'I', closeWith:'_', openWith:'_'},
		{name:'Stroke through', key:'S', closeWith:'-', openWith:'-'},
		{name:'Em dash', key:'D', closeWith:'--', openWith:'--'},
		{name:'Underlined', key:'U', closeWith:'+', openWith:'+'},
		{separator:'---------------' },
		{name:'Align left', openWith:'p<. '},
		{name:'Align right', openWith:'p>. '},
		{name:'Align centered', openWith:'p=. '},
		{name:'Align justified', openWith:'p<>. '},
		{separator:'---------------' },
		{name:'Bulleted list', openWith:'(!(* |!|*)!)'},
		{name:'Numeric list', openWith:'(!(# |!|#)!)'},
		{name:'Text indent', openWith:'p((. '},
		{separator:'---------------' },
		{name:'Picture', replaceWith: function(markItUp) {}},
		{name:'Link', openWith:'"', closeWith:'([![Title]!])":[![Link:!:http://]!]', placeHolder:'Your text to link here...' },
		{separator:'---------------' },
		{name:'Quotes', openWith:'bq(!(([![Class]!])!)). '},
		{name:'Code', openWith:'@', closeWith:'@'},
/**		Hack for especials links with % **/
		{name:'Especial link HTML', openWith:'<notextile><a title="[![Title]!]" href="[![Link:!:http://]!]" target="_blank">', closeWith:'</a></notextile>', placeHolder:'Your especial link here...' },
//		{separator:'---------------' },
//		{name:'Preview', call:'preview', className:'preview'}
	]
}

String.prototype.capitalize = function() {
    return this.charAt(0).toUpperCase() + this.slice(1);
}

/**
I added the FileBrowserHelper object so that it can store the original markitup
object that fired the event / popup, so that I can use it when trying to return
to the edittor.
**/
var FileBrowserHelper = {
    markItUp: false, // objet to store id of the textarea clicked
    insertPicture: function(markItUp) {
                $("#markItUp"+markItUp.capitalize() +" .markItUpButton20").click(function (){
                    FileBrowserHelper.markItUp = markItUp;         
                    var widget = $("#mediaUpload").mediaWidget("position", this).mediaWidget("open");
                });
    },
    triggerInsert: function(url) {
        $("#"+this.markItUp).trigger('insertion', [{replaceWith: '!(left)'+url+'(alt_text)!'}]);
    }
};
