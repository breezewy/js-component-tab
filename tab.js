


function Tab(node) {
    this.node = $(node);  //获取到传入的面板节点
}

Tab.prototype = {
    constructor: Tab,
    init: function () {
        this.tab = this.node.find('.tab');   //通过面板节点找到所有的面板项
        this.pannel = this.node.find('.pannel');  //通过面板节点找到所有的内容项
        this.bind();  //init初始化里，直接调用bind()方法
    },
    bind: function () {   //bind方法，绑定点击事件
        this.tab.on('click', function () {
            var $this = $(this);   //$this 保存 点击到的面板项
            var index = $(this).index();  //index 保存，点击到的面板项的下标
            $this.addClass('active').siblings().removeClass('active');  
            $this.parents('.tab-container').find('.pannel').eq(index).addClass('show').siblings().removeClass('show');
        })
    }
}

var tab1 = new Tab(document.querySelectorAll('.tab-container')[0]);
var tab2 = new Tab(document.querySelectorAll('.tab-container')[1]);
tab1.init();
tab2.init();