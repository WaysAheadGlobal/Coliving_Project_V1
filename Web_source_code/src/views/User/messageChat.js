import {Link, useNavigate} from 'react-router-dom';

function MessageChat() {
    const history = useNavigate();
    const backtoMessage = (e) => {
        history("/user/messages");
    }
    return (
        <>
            <section class="user-area padd80">
                <div class="container">
                    <div class="innerarea padd40 pb-0">
                        <div class="chatboxbg">
                            <div class="row">
                                <div class="col-xxl-3 col-xl-3 col-lg-3 col-md-12 col-sm-12 col-12 pe-0 ps-0">
                                    <div class="chatsidebar">
                                        <div class="sidehead">
                                            <div class="hamburger"><i class="fa fa-solid fa-bars"></i></div>
                                            <div class="searchcenter">
                                                <input type="text" name="" placeholder="Search" />
                                                <span><i class="fa fa-solid fa-magnifying-glass"></i></span>
                                            </div>
                                            <div class="newmsgs"><i class="fa fa-regular fa-pen-to-square"></i></div>
                                        </div>
                                        <div class="mobileuse">
                                            <div class="inboxheading">
                                                Inbox
                                            </div>
                                            <div class="inbuser">
                                                <div class="uitem">
                                                    <div class="uimgname">
                                                        <img src={require('../../img/user3.png')} class="img-fluid" alt="User" />
                                                        <h4>David Oliver</h4>
                                                    </div>
                                                    <span class="timestatus">9:54 PM</span>
                                                </div>
                                                {/* <div class="uitem">
                                                    <div class="uimgname">
                                                        <img src={require('../../img/user3.png')} class="img-fluid" alt="User" />
                                                        <h4>David Oliver</h4>
                                                    </div>
                                                    <span class="timestatus">9:54 PM</span>
                                                </div>
                                                <div class="uitem">
                                                    <div class="uimgname">
                                                        <img src={require('../../img/user3.png')} class="img-fluid" alt="User" />
                                                        <h4>David Oliver</h4>
                                                    </div>
                                                    <span class="timestatus">9:54 PM</span>
                                                </div> */}

                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-xxl-9 col-xl-9 col-lg-9 col-md-12 col-sm-12 col-12 ps-0 pe-0">
                                    <div class="chat-side">
                                        <div class="chat-head">
                                            <div class="userside">
                                                <img src={require('../../img/user3.png')} class="img-fluid" alt="User" />
                                                <div>
                                                    <h4>David Oliver</h4>
                                                    <span>last seen recently</span>
                                                </div>
                                            </div>
                                            <div class="majoricons">
                                                <span class="head-search"><i class="fa fa-solid fa-magnifying-glass"></i></span>
                                                <span class="head-ellipse"><i class="fa fa-solid fa-ellipsis"></i></span>
                                                <span class="head-times" onClick={backtoMessage}><i class="fa fa-solid fa-xmark"></i></span>
                                            </div>
                                        </div>
                                        <div class="middchat">
                                            <div class="userchat">
                                                <div class="adminchatside">
                                                    <div class="adminchat">
                                                        <p>Hi User</p>
                                                        <div class="chatdate">9:54 PM <span><i class="fa fa-solid fa-check-double"></i></span></div>
                                                    </div>
                                                    <div class="userimgicon">
                                                        <img src={require('../../img/user5.png')} class="img-fluid" alt="User Image" />
                                                    </div>
                                                </div>
                                                <div class="clear"></div>
                                                <div class="adminchatside">
                                                    <div class="adminchat">
                                                        <p>How are you?</p>
                                                        <div class="chatdate">9:54 PM <span><i class="fa fa-solid fa-check-double"></i></span></div>
                                                    </div>
                                                    <div class="userimgicon">
                                                        <img src={require('../../img/user5.png')} class="img-fluid" alt="User Image" />
                                                    </div>
                                                </div>
                                                <div class="clear"></div>
                                                <div class="adminchatside">
                                                    <div class="adminchat">
                                                        <p>Hi User</p>
                                                        <div class="chatdate">9:54 PM <span><i class="fa fa-solid fa-check-double"></i></span></div>
                                                    </div>
                                                    <div class="userimgicon">
                                                        <img src={require('../../img/user5.png')} class="img-fluid" alt="User Image" />
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="admincvr">
                                                <div class="adminchatside">
                                                    <div class="adminchat">
                                                        <p>Hi David Oliver</p>
                                                        <div class="chatdate">9:54 PM <span><i class="fa fa-solid fa-check-double"></i></span></div>
                                                    </div>
                                                    <div class="userimgicon">
                                                        <img src={require('../../img/user5.png')} class="img-fluid" alt="User Image" />
                                                    </div>
                                                </div>
                                                <div class="clear"></div>
                                                <div class="adminchatside">
                                                    <div class="adminchat">
                                                        <p>I want to share the space with someone I already know and wanted to get in touch with you regarding this to discuss the details.</p>
                                                        <div class="chatdate">9:54 PM <span><i class="fa fa-solid fa-check-double"></i></span></div>
                                                    </div>
                                                    <div class="userimgicon">
                                                        <img src={require('../../img/user5.png')} class="img-fluid" alt="User Image" />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="typemsgs">
                                            <form action="" method="">
                                                <ul>
                                                    <li class="attachedicon"><i class="fa fa-solid fa-paperclip"></i></li>
                                                    <li class="typemsghere">
                                                        <input type="text" placeholder="Write a message..." name="" />
                                                    </li>
                                                    <li class="subsmile">
                                                        <span><i class="fa-regular fa-face-smile"></i></span>
                                                        <span><i class="fa fa-solid fa-paper-plane"></i></span>
                                                    </li>
                                                </ul>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section class="user-area padd80" style={{display: 'none'}}>
                <div class="container">
                    <div class="innerarea padd40 pb-0">
                        <div class="chatboxbg">
                            <div class="row">
                                <div class="col-xxl-3 col-xl-3 col-lg-3 col-md-12 col-sm-12 col-12 pe-0 ps-0">
                                    <div class="chatsidebar">
                                        <div class="sidehead">
                                            <div class="hamburger"><i class="fa fa-solid fa-bars"></i></div>
                                            <div class="searchcenter">
                                                <input type="text" name="" placeholder="Search" />
                                                <span><i class="fa fa-solid fa-magnifying-glass"></i></span>
                                            </div>
                                            <div class="newmsgs"><i class="fa-regular fa-pen-to-square"></i></div>
                                        </div>
                                        <div class="mobileuse">
                                            <div class="inboxheading">
                                                Inbox
                                            </div>
                                            <div class="inbuser">
                                                <div class="uitem">
                                                    <div class="uimgname">
                                                        <img src="../img/user3.png" class="img-fluid" alt="User" />
                                                        <h4>David Oliver</h4>
                                                    </div>
                                                    <span class="timestatus">9:54 PM</span>
                                                </div>
                                                <div class="uitem">
                                                    <div class="uimgname">
                                                        <img src="../img/user3.png" class="img-fluid" alt="User" />
                                                        <h4>David Oliver</h4>
                                                    </div>
                                                    <span class="timestatus">9:54 PM</span>
                                                </div>
                                                <div class="uitem">
                                                    <div class="uimgname">
                                                        <img src="../img/user3.png" class="img-fluid" alt="User" />
                                                        <h4>David Oliver</h4>
                                                    </div>
                                                    <span class="timestatus">9:54 PM</span>
                                                </div>

                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-xxl-9 col-xl-9 col-lg-9 col-md-12 col-sm-12 col-12 ps-0 pe-0">
                                    <div class="chat-side">
                                        <div class="chat-head">
                                            <div class="userside">
                                                <img src="../img/icons/user.png" class="img-fluid" alt="User" />
                                                <div>
                                                    <h4>David Oliver</h4>
                                                    <span>last seen recently</span>
                                                </div>
                                            </div>
                                            <div class="majoricons">
                                                <span class="head-search"><i class="fa fa-solid fa-magnifying-glass"></i></span>
                                                <span class="head-ellipse"><i class="fa fa-solid fa-ellipsis"></i></span>
                                                <span class="head-times"><i class="fa fa-solid fa-xmark"></i></span>
                                            </div>
                                        </div>
                                        <div class="middchat">
                                            <div class="userchat">
                                                <div class="adminchatside">
                                                    <div class="adminchat">
                                                        <p>Hi User</p>
                                                        <div class="chatdate">9:54 PM <span><i class="fa fa-solid fa-check-double"></i></span></div>
                                                    </div>
                                                    <div class="userimgicon">
                                                        <img src="../img/user5.png" class="img-fluid" alt="User Image" />
                                                    </div>
                                                </div>
                                                <div class="clear"></div>
                                                <div class="adminchatside">
                                                    <div class="adminchat">
                                                        <p>Hi User</p>
                                                        <div class="chatdate">9:54 PM <span><i class="fa fa-solid fa-check-double"></i></span></div>
                                                    </div>
                                                    <div class="userimgicon">
                                                        <img src="../img/user5.png" class="img-fluid" alt="User Image" />
                                                    </div>
                                                </div>
                                                <div class="clear"></div>
                                                <div class="adminchatside">
                                                    <div class="adminchat">
                                                        <p>Hi User</p>
                                                        <div class="chatdate">9:54 PM <span><i class="fa fa-solid fa-check-double"></i></span></div>
                                                    </div>
                                                    <div class="userimgicon">
                                                        <img src="../img/user5.png" class="img-fluid" alt="User Image" />
                                                    </div>
                                                </div>
                                                <div class="clear"></div>
                                                <div class="adminchatside">
                                                    <div class="adminchat">
                                                        <p>Hi User</p>
                                                        <div class="chatdate">9:54 PM <span><i class="fa fa-solid fa-check-double"></i></span></div>
                                                    </div>
                                                    <div class="userimgicon">
                                                        <img src="../img/user5.png" class="img-fluid" alt="User Image" />
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="admincvr">
                                                <div class="adminchatside">
                                                    <div class="adminchat">
                                                        <p>Hi David Oliver</p>
                                                        <div class="chatdate">9:54 PM <span><i class="fa fa-solid fa-check-double"></i></span></div>
                                                    </div>
                                                    <div class="userimgicon">
                                                        <img src="../img/user5.png" class="img-fluid" alt="User Image" />
                                                    </div>
                                                </div>
                                                <div class="clear"></div>
                                                <div class="adminchatside">
                                                    <div class="adminchat">
                                                        <p>I want to share the space with someone I already know and wanted to get in touch with you regarding this to discuss the details.</p>
                                                        <div class="chatdate">9:54 PM <span><i class="fa fa-solid fa-check-double"></i></span></div>
                                                    </div>
                                                    <div class="userimgicon">
                                                        <img src="../img/user5.png" class="img-fluid" alt="User Image" />
                                                    </div>
                                                </div>
                                                <div class="clear"></div>
                                                <div class="adminchatside">
                                                    <div class="adminchat">
                                                        <p>I want to share the space with someone I already know and wanted to get in touch with you regarding this to discuss the details.</p>
                                                        <div class="chatdate">9:54 PM <span><i class="fa fa-solid fa-check-double"></i></span></div>
                                                    </div>
                                                    <div class="userimgicon">
                                                        <img src="../img/user5.png" class="img-fluid" alt="User Image" />
                                                    </div>
                                                </div>
                                                <div class="clear"></div>
                                                <div class="adminchatside">
                                                    <div class="adminchat">
                                                        <p>I want to share the space with someone I already know and wanted to get in touch with you regarding this to discuss the details.</p>
                                                        <div class="chatdate">9:54 PM <span><i class="fa fa-solid fa-check-double"></i></span></div>
                                                    </div>
                                                    <div class="userimgicon">
                                                        <img src="../img/user5.png" class="img-fluid" alt="User Image" />
                                                    </div>
                                                </div>
                                                <div class="clear"></div>
                                                <div class="adminchatside">
                                                    <div class="adminchat">
                                                        <p>I want to share the space with someone I already know and wanted to get in touch with you regarding this to discuss the details.</p>
                                                        <div class="chatdate">9:54 PM <span><i class="fa fa-solid fa-check-double"></i></span></div>
                                                    </div>
                                                    <div class="userimgicon">
                                                        <img src="../img/user5.png" class="img-fluid" alt="User Image" />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="typemsgs">
                                            <form action="" method="">
                                                <ul>
                                                    <li class="attachedicon"><i class="fa fa-solid fa-paperclip"></i></li>
                                                    <li class="typemsghere">
                                                        <input type="text" placeholder="Write a message..." name="" />
                                                    </li>
                                                    <li class="subsmile">
                                                        <span><i class="fa-regular fa-face-smile"></i></span>
                                                        <span><i class="fa fa-solid fa-paper-plane"></i></span>
                                                    </li>
                                                </ul>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default MessageChat;