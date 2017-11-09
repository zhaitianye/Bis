/**
 * @license Copyright (c) 2003-2017, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see LICENSE.md or http://ckeditor.com/license
 */

CKEDITOR.editorConfig = function( config ) {
	// Define changes to default configuration here.
	/*配置语言*/
	config.language = 'zh-cn'; 
	/*配置字体*/
    config.font_names = '微软雅黑/Microsoft Yahei;楷体/楷体;黑体/黑体;宋体/宋体;华文细黑/华文细黑;华文楷体/华文楷体;Gigi/Gigi;' + config.font_names;
    /*图片预览区域显示内容*/
	config.image_previewText = ' '; 
   	/*配置图片上传接口部分
    https://www.cnblogs.com/marshhu/p/7309449.html
    找到ckeditor/plugins/image/dialogs/image.js文件，搜索 id:"Upload" 把后面的hidden:!0改为hidden:false，
    config.filebrowserImageUploadUrl = "/Admin/Service/CKeditorUpload";*/


	config.toolbarGroups = [
		{ name: 'document', groups: [ 'mode', 'document', 'doctools' ] },
		{ name: 'clipboard', groups: [ 'clipboard', 'undo' ] },
		{ name: 'editing', groups: [ 'find', 'selection', 'spellchecker', 'editing' ] },
		{ name: 'forms', groups: [ 'forms' ] },
		{ name: 'paragraph', groups: [ 'list', 'indent', 'blocks', 'align', 'bidi', 'paragraph' ] },
		{ name: 'links', groups: [ 'links' ] },
		{ name: 'insert', groups: [ 'insert' ] },
		{ name: 'tools', groups: [ 'tools' ] },
		'/',
		{ name: 'styles', groups: [ 'styles' ] },
		{ name: 'basicstyles', groups: [ 'cleanup', 'basicstyles' ] },
		{ name: 'colors', groups: [ 'colors' ] },
		{ name: 'others', groups: [ 'others' ] },
		{ name: 'about', groups: [ 'about' ] }
	];

	config.removeButtons = 'Save,NewPage,Print,Templates,Cut,Copy,Paste,Find,Replace,SelectAll,Scayt,Form,Checkbox,Radio,TextField,Textarea,Select,Button,ImageButton,HiddenField,CreateDiv,Language,Anchor,PageBreak,Iframe,About,PasteText,PasteFromWord,ShowBlocks,Styles';


	config.format_tags = 'p;h1;h2;h3;pre';
	// Simplify the dialog windows.
	config.removeDialogTabs = 'image:advanced;link:advanced';
};
