import config from "../../Config/config";

const ListingItem =(props) => {
    console.log('props.item', props.item)
    return (
        <div class="articleItem">
            <div class="row">
                <div class="col-xxl-5 col-xl-5 col-lg-5 col-md-5 col-sm-12 col-12 pe-xxl-0 pe-xl-0 pe-lg-0">
                    <div class="aImg">
                        <img src={`${config.ImageUrl}images/Property/` + props.item.propertyphoto1} alt="artical img" class="img-fluid" />
                        <div class="imgOvertext">
                            <div class="status">
                                <div class="badge1">New</div>
                                <div class="badge2 mt-1">Available</div>
                            </div>
                            <div class="whishlist">
                                <i class="fa fa-regular fa-heart"></i>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-xxl-7 col-xl-7 col-lg-7 col-md-7 col-sm-12 col-12">
                    <div class="articalBody">
                        <div>
                            <label>{props.item.province}</label>
                            <h4><a href={`ListingDetail/`+props.item.id}>{props.item.propertyname}</a></h4>
                            <ul>
                                <li>4 Bedroom</li>
                                <li>1 shared Bathroom</li>
                                <li>Fast WiFi</li>
                            </ul>
                        </div>
                        <div class="artf1">
                            <div class="rating">
                                <i class="fa fa-solid fa-star"></i>
                                5.0
                            </div>
                            <div class="artPrice">
                                From <span>${props.item.MinRent}</span> /month
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ListingItem;