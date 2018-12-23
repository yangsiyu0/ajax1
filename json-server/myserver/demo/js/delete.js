let remove = function(){
    
    oList.onclick = function(e){
        console.log(1);
        e = e || window.event;
        let tar = e.target || e.srcElement;
        let tarTag = tar.tagName.toUpperCase();
        if(tarTag === "A" && tar.innerHTML === "删除"){
           
            let id = tar.getAttribute('id');
            let flag = window.confirm("确定删除编号为["+ id +"]吗？");
            if(flag){
                $.ajax({
                    url:"http://localhost:3004/fruits/" + id,
                    type:"delete",
                    success(data){
                        console.log("del success")
                        // 在重新渲染下页面
                        $.ajax({
                            url:"http://localhost:3004/fruits",
                            type:"get",
                            success(jsonData){
                                bind(jsonData);
                            }
                        })
                    },
                    error(){
                        alert("del error");
                    }
                });
            }
            
        };
        }
        
}