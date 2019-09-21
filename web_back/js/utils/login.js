var user={
    login:function(username,password,CallBack){
        $.post('http://localhost:8000/admin/login',{user_name:username,password:password},function(res){
            CallBack(res);
        })
    }
}