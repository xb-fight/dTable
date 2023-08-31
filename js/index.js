(function(){
    const checkAll = document.querySelector('.checkAll');
    const checks = document.querySelectorAll('tbody input[type="checkbox"]')
    const tb = document.querySelector('tbody');
    const ths = document.querySelectorAll('th');
    const trs = document.querySelectorAll('tbody tr')
    // 初始化
    /**
     *   交互操作
     *      1. 按钮操作
     *      2. 排序操作
     * */  
   
    checkAll.addEventListener('click',function(e){
        for(let check of checks){
            // check 的状态和checkAll 状态一致
            check.checked = checkAll.checked;
        }
    })

    tb.addEventListener('click',function(e){
        // 限定事件的目标对象
        if(e.target.tagName === 'INPUT'){
            let checkAll_status = true;  // checkAll的选中状态
           for(let check of checks){
                // 所有的check 为true， checkAll_status才为true
                checkAll_status = checkAll_status &&  check.checked
           }
           checkAll.checked =checkAll_status;
        }
       
    })

    for(let i=1;i<ths.length;i++){
        ths[i].addEventListener('click',function(e){
            const arr= Array.prototype.slice.call(trs).sort((a,b)=>{
                if(i === 2 || i === 4){
                   return a.querySelectorAll('td')[i].innerText.localeCompare(b.querySelectorAll('td')[i].innerText,'zh');
                } else{
                    return a.querySelectorAll('td')[i].innerText - b.querySelectorAll('td')[i].innerText ;
                } 
            })

            for(let td of arr){
                tb.appendChild(td);
            }

        })
    }
      




})()


