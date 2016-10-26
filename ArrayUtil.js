/**
 * Created by a on 20.10.2016.
 */
ArrayUtil();
function ArrayUtil() {
   ArrayUtil.barmanSort=function(array,compare){
        var left = 0;
        var right = array.length-1;
        while(1){
            console.log(array);
            if (maxToEnd(array,left,right,compare))return;
            right--;
            if (minToBeg(array,left,right,compare))return;
            left++;
        }
    }

    ArrayUtil.swap=function(array,i,j){
        var t = array[j];
        array[j] = array[i];
        array[i] = t;
    }

    function minToBeg(array,min,max,compare){
        var flag = true;
        for (var i=max; i>min; i--){
            if (compare(array[i],array[i-1])<0){
                ArrayUtil.swap(array,i,i-1);
                flag=false;
            }
        }
        return flag;
    }

    function maxToEnd(array,min,max,compare){
        var flag = true;
        for (var i = min; i<max; i++){
            if (compare(array[i],array[i+1])>0){
                ArrayUtil.swap(array,i,i+1);
                flag = false;
            }
        }
        return flag;
    }

}





