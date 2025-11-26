function addTF(){
	let s = '';  
	$.when(
		$(".tw-para").each(function(i,e){
			k = $(this).data('keywords');        
			if(k&&k!=""){
				if(s==""){
					s=k;
				}else{
					var a=k.split(",");
					for(var i=0;i<a.length;i++)
						if((","+s+",").toLowerCase().indexOf(","+a[i].toLowerCase()+",")<0)
							s+=","+a[i];
				}
			}
		})
	).done(function(){   
			var a=s.split(",").sort();
			for(var i=0;i<a.length;i++)
				$("#tagf").append('<option value="'+a[i].toLowerCase()+'">'+a[i]+'</option>');
		}
	);
}