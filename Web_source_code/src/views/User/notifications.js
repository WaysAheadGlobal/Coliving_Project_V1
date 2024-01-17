
function Notifications() {
    return (
        <div class="content-area">
            <h4 class="content-title">Notification</h4>
            <div class="profileform notify">
                <div class="searchbtn">
                    <ul class="nav nav-tabs" id="myTab" role="tablist">
                        <li class="nav-item" role="presentation">
                            <button class="nav-link active" id="home-tab" data-bs-toggle="tab" data-bs-target="#home" type="button" role="tab" aria-controls="home" aria-selected="true">All</button>
                        </li>
                        <li class="nav-item" role="presentation">
                            <button class="nav-link" id="profile-tab" data-bs-toggle="tab" data-bs-target="#profile" type="button" role="tab" aria-controls="profile" aria-selected="false">Unread</button>
                        </li>
                    </ul>
                    <form class="ntySearch" action="" method="">
                        <span>Search</span>
                        <div>
                            <input type="text" name="search" placeholder="Search" />
                                <span><i class="fa-solid fa-magnifying-glass"></i></span>
                        </div>
                    </form>
                </div>
                <div class="tab-content" id="myTabContent">
                    <div class="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                        <label class="catwise">Today</label>
                        <div class="notiItem">
                            <div class="ntfydate">
                                22<br />Nov
                            </div>
                            <p class="mb-0">You have received a message form David Oliver</p>
                        </div>
                        <div class="notiItem">
                            <div class="ntfydate">
                                18<br />Nov
                            </div>
                            <p class="mb-0">You have received a message for booking confirmation</p>
                        </div>
                    </div>
                    <div class="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">...</div>
                </div>
            </div>
        </div>
    );
}

export default Notifications;