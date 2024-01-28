import config from "../../Config/config";
import master from "../../data/masterData.json";

const ListingItem =(props) => {
    return (
        <div class="articleItem">
            <div class="row">
                <div class="col-xxl-5 col-xl-5 col-lg-5 col-md-5 col-sm-12 col-12 pe-xxl-0 pe-xl-0 pe-lg-0">
                    <div class="aImg">
                        <img style={{width: '100%'}} src={`${config.ImageUrl}images/Property/` + props.item.propertyphoto1} alt="artical img" class="img-fluid" />
                        <div class="imgOvertext">
                            <div class="status">
                                <div class="badge1">New</div>
                                <div class="badge2 mt-1">Available</div>
                            </div>
                            <div id={`prop`+props.item.id} class={props.item.WaitingId == 1 ? "whishlist nowait" : "whishlist wait"} onClick={()=> props.updateWaitingList(props.item.id)}>
                                <i class="fa fa-regular fa-heart"></i>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-xxl-7 col-xl-7 col-lg-7 col-md-7 col-sm-12 col-12">
                    <div class="articalBody">
                        <div>
                            <label>{props.item.province}</label>
                            <h4><a href={`/ListingDetail/`+props.item.id}>{props.item.propertyname}</a></h4>
                            <ul style={{marginBottom: '0px'}}>
                                <li>{props.item.roomcount} Rooms</li>
                                <li>{props.item.apartmentsize == "0" ? "" : master.ApartmentSize.find(e => e.id == props.item.apartmentsize).name}</li>
                                {/* <li>Fast WiFi</li> */}
                                {props && props.item && props.item.apartmentamenities && props.item.apartmentamenities.split(',').map((item, index)=> (
                                        <li style={{display: index <=3 ? "block": "none"}}>
                                            {item <= 20 && item != "" && master.ApartmentAmeneties.find(e => e.id == item).name}
                                        </li>
                                        ))}
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