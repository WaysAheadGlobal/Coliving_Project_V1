import BlogsAPI from '../../data/blogs.json'
const Blogs = () => {
	
	return (
		<>
			<section class="banner pagetitle">
				<img  src={require('./../../img/blogbg.png')} class="img-fluid" alt="blog banner img" />
					<div class="highlights">
						<div>
							<h1>Coliving Blog</h1>
							<p>A Way to Live More Flexibly</p>
						</div>
					</div>
			</section>
			<section class="allBlogs padd80">
				<div class="container">
					<div class="heading1 mb-5 text-center">
						<h2>Our Blogs</h2>
						<p class="mt-3">Dive into a wealth of knowledge, trends, and stories that enhance <br />your co-living experience.</p>
					</div>
					<div class="row g-xxl-5 g-xl-5 g-lg-5 g-md-5 g-sm-4 g-4">
					{
						BlogsAPI.map((blog, index) => {
							return(
								<div class="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
								<div class="blogItem">
									<div class="img">
										<img src={require(`../../../src/img/`+blog.Image)} class="img-fluid" alt="blog img" />
									</div>
									<div class="b-body">
										<div class="date">
											<i class="fa-regular fa fa-clock"></i>&nbsp;&nbsp;
											{blog.BlogDate}
										</div>
										<h4>{blog.Title}</h4>
										<p>{blog.ShortDescription}</p>
										<a href={`/blog-details/`+ blog.Slug} class="readmore">Read More &nbsp;<i class="fa fa-solid fa fa-arrow-right"></i></a>
									</div>
								</div>
							</div>
							)})
					}
					</div>
				</div>
			</section>
		</>
	);
}

export default Blogs;
