import { useEffect, useState } from 'react';
import BlogsAPI from '../../data/blogs.json'
import { Link, useNavigate, useParams } from 'react-router-dom';

function BlogDetails() {
    const params = useParams();
    const history = useNavigate();
    const [blogData, SetBlogData] = useState({});
    useEffect(() => {
        if (params.id != "") {
            getBlogDetails(params.id);
        }
    }, [])

    function getBlogDetails(slug) {
        SetBlogData(BlogsAPI.filter(x => x.Slug == params.id)[0]);
    }
    return (
        <>
            <section class="allBlogs blogdetailpage mt-5 padd80">
                <div class="container">
                    <div class="heading1 mb-5 text-center">
                        <div class="subTitle">Things to Read</div>
                        <h2>{blogData.Title}</h2>
                    </div>
                    <div class="row g-5">
                        <div class="col-xxl-8 col-xl-7 col-lg-7 col-md-12 col-sm-12 col-12">
                            <div class="blogItem">
                                <div class="img">
                                    <img src={require(`./../../img/b11.png`)} class="img-fluid" alt="Blog imgs" />
                                </div>
                                <div class="b-body detailBody">
                                    <div class="date">
                                        <i class="fa fa-regular fa-clock"></i>&nbsp;&nbsp;
                                        {blogData.BlogDate}
                                    </div>
                                    <p>{blogData.Para}</p>
                                    <h4>{blogData.Heading1}</h4>
                                    <p>{blogData.Para1}</p>
                                    <h4>{blogData.Heading2}</h4>
                                    <p>{blogData.Para2}</p>
                                    <h4>{blogData.Heading3}</h4>
                                    <p>{blogData.Para3}</p>
                                </div>
                            </div>
                            <div class="col-xxl-12 col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                            <div class="buttonGrp text-center mt-4">
                                <button class="btn btn-secondary ms-2" onClick={()=> history("/blogs")}>Back</button>
                            </div>
                        </div>
                        </div>
                        <div class="col-xxl-4 col-xl-5 col-lg-5 col-md-12 col-sm-12 col-12">
                            <div class="sideallblogs">
                                {
                                    BlogsAPI.map((blog, index) => {
                                        return (
                                            <div class="sidebitem" onClick={() => window.location.href=`/blog-details/`+ blog.Slug}>
                                                <div class="b-img">
                                                    <img src={require(`../../../src/img/`+blog.Image)} class="img-fluid" alt="Blog imgs" />
                                                </div>
                                                <div class="b-title">
                                                    <h4>{blog.Title}</h4>
                                                    <div class="date">
                                                        <i class="fa fa-regular fa-clock"></i>&nbsp;&nbsp;
                                                        {blog.BlogDate}
                                                    </div>
                                                </div>
                                            </div>
                                        )
                                    })
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default BlogDetails;
