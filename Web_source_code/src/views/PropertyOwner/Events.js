
function Events() {
    return (
        <div class="content-area">
				<h4 class="content-title">
					Event
					
				</h4>
				<div class="profileform">
					<div class="row">
						<div class="col-12 text-end mb-2">
							<a class="btn btn-primary text-capitalize" href="/owner/addEvents/0"><i class="fa fa-solid fa-plus"></i>&nbsp; add event</a>
						</div>
					</div>
					<div class="table-layout1">
						<div class="table-responsive">
							<table class="table">
								<thead>
									<tr>
										<th class="text-center">Date/Time</th>
										<th class="text-center">image</th>
										<th class="text-center">event name</th>
										<th class="text-center">Location</th>
										<th class="text-center">Charges ($)</th>
										<th class="text-center">action</th>
									</tr>
								</thead>
								<tbody>
									<tr>
										<td class="text-center">
											<div class="datef">
												<div>25 <br />Dec</div>
												<small>07:00 PM</small>
											</div>
										</td>
										<td class="text-center">
											<div class="tbleimg">
												<img src={require('../../img/tableimg1.png')} class="img-fluid" alt="Table Image" />
											</div>
										</td>
										<td class="text-center">
											Christmas carnival
										</td>
										<td class="text-center">
											Urban Styled Apt.
										</td>
										<td class="text-center">
											$ 18
										</td>
										<td class="text-center">
											<div class="tablebtngrp">
												<a class="delete" href="/owner/addEvents/1"><i class="fa fa-solid fa-pencil"></i></a>
												<button class="delete"><i class="fa fa-regular fa-trash"></i></button>
											</div>
										</td>
									</tr>
									<tr>
										<td class="text-center">
											<div class="datef">
												<div>10 <br />Jan</div>
												<small>07:00 PM</small>
											</div>
										</td>
										<td class="text-center">
											<div class="tbleimg">
												<img src={require('../../img/tableimg1.png')} class="img-fluid" alt="Table Image" />
											</div>
										</td>
										<td class="text-center">
											Halloween
										</td>
										<td class="text-center">
											Urban Styled Apt.
										</td>
										<td class="text-center">
											$ 12
										</td>
										<td class="text-center">
											<div class="tablebtngrp">
                                            <button class="delete" href="/owner/addEvents/2"><i class="fa fa-solid fa-pencil"></i></button>
												<button class="delete"><i class="fa fa-regular fa-trash"></i></button>
											</div>
										</td>
									</tr>
								</tbody>
							</table>
						</div>
					</div>
				</div>
        </div>
    )
}

export default Events;