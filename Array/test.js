var searchInsert = function(nums, target) {
	var index = 0
    for(var i = 0; i < nums.length; i++) {
    	if(nums[i] < target) {
    		index = i + 1
    	} else if(nums[i] === target) {
    		index = i
    		break
    	} else {
    		if(index === 0) {
    			index = 0
    		} else {
    			index = i
    		}
    		break
    	}
    }
    return index
}
console.log(searchInsert([1,3,5], 3))