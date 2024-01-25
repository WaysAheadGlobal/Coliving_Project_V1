
function Messages() {
    return (
        <div class="content-area">
            <h4 class="content-title">Messages</h4>
            <div class="profileform msgpage">
                <div class="messageItem">
                    <div class="detleft">
                        <div class="msgimg">
                            <img  src={require('./../../img/user3.png')} class="img-fluid" alt="User img" />
                        </div>
                        <h5>David Oliver </h5>
                        <div class="verifiedhost">
                            <img   src={require('./../../img/icons/check-curve-blank.png')} class="img-fluid" alt="Check" />
                                Verified host
                        </div>
                    </div>
                    <div class="dettime">
                        9:54 PM
                    </div>
                </div>
                <div class="messageItem">
                    <div class="detleft">
                        <div class="msgimg">
                            <img src={require('./../../img/user3.png')} class="img-fluid" alt="User img" />
                        </div>
                        <h5>David Oliver </h5>
                        <div class="verifiedhost">
                            <img  src={require('./../../img/icons/check-curve-blank.png')} class="img-fluid" alt="Check" />
                                Verified host
                        </div>
                    </div>
                    <div class="dettime">
                        9:54 PM
                    </div>
                </div>
                <div class="messageItem">
                    <div class="detleft">
                        <div class="msgimg">
                            <img  src={require('./../../img/user3.png')} class="img-fluid" alt="User img" />
                        </div>
                        <h5>David Oliver </h5>
                        <div class="verifiedhost">
                            
                                Verified host
                        </div>
                    </div>
                    <div class="dettime">
                        9:54 PM
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Messages;