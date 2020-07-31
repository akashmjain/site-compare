<template>
	<div>	
	<h3><center><i>This is feedback form for the product chosen</i></center></h3>
  <form class="rounded">
  <div class="form-group">
    <label for="site_name">Select Site Name</label>
    <select class="form-control" id="site_name" required="required">
      <option>1</option>
      <option>2</option>
      <option>3</option>
      <option>4</option>
      <option>5</option>
    </select>
  </div>
  <div class="form-group">
	<label for="rating">Rating(1 to 5)</label>
	<input type="number" id="hours" name="Rating" min="1" max="5" class="rounded" required="required">
  </div>
  <div class="form-group">
    <label for="comment">Comment</label>
    <textarea class="form-control" id="comment"></textarea>
  </div>
  <div class="submit_button">
	<button type="submit" class="btn btn-primary">Submit</button>
  </div>
</form>
</div>
</template>

<style scoped>
	label {
		font-size : 1.15rem;
	}
	.submit_button {
		text-align : center;
	}
</style>
