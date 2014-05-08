
window.Admin = Ember.Application.create();

Admin.Router.map(function() {
	this.resource('home', { path: '/' });
	this.resource('news', { path: '/news' });
});


//Admin.HomeRoute = Ember.Route.extend({
//	renderTemplate: function() {
//		this.render('navigation');
//		this.render('panel', {
//			content: 'ttt'
//		});
//	}
//});
Admin.NewsView = Ember.View.extend({
	content: 'tttnews',
	templateName: 'panel'
});
Admin.HomeView = Ember.View.extend({
	content: 'tttnews',
	templateName: 'panel'
});



Ember.TEMPLATES['navigation'] = Ember.Handlebars.compile('<div>' +
	'Nav:' +
	'{{#link-to "home"}}Home{{/link-to}}' +
	'{{#link-to "news"}}News{{/link-to}}' +
	'</div>'
);

Ember.TEMPLATES['panel'] = Ember.Handlebars.compile('<div>{{content}}</div>');


//
//function AdminJS()
//{
//	this.Blocks = new Blocks;
//}
//
//function Blocks()
//{
//	this.blocks = [];
//
//	this.add = function(block)
//	{
//		this.blocks = block;
//	}
//
//	this.all = function()
//	{
//		return this.blocks;
//	}
//}
//
//function Block(config)
//{
//	this.config = config;
//	this.template = '';
//
//	this.build = function()
//	{
//		var block = this;
//		var content = $('<a>').attr('href', '#').text(this.config.label).click(function(e) {
//			e.preventDefault();
//			block.loadTemplate();
//		});
//		$(this.config.navigation).append(content);
//	}
//
//	this.loadTemplate = function()
//	{
//		$(this.config.target).html('Loading...');
//
//		if(this.template) {
//			return this.showTemplate();
//		}
//
//		var block = this;
//		$.ajax(this.config.template, {
//			method: 'post',
//			data: this.config.params,
//			dataType: 'json',
//			complete: function(response) {
//				block.template = response.responseText;
//				block.showTemplate();
//			}
//		});
//	}
//
//	this.showTemplate = function()
//	{
//		$(this.config.target).html(this.template);
//	}
//
//}
//
//var Admin = new AdminJS();
//
//$(document).ready(function() {
//
//	$(Admin.Blocks.all()).each(function(i, Block) {
//
//		Block.build();
//
//	});
//
//});