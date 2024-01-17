
function MealPlans() {
    return(
        <div class="content-area">
				<h4 class="content-title">Event</h4>
				<div class="profileform">
					<div class="table-layout1">
						<div class="table-responsive">
							<table class="table">
								<thead>
									<tr>
										<th class="text-center">image</th>
										<th class="text-center">meal name</th>
										<th class="text-center">Location</th>
										<th class="text-center">Time</th>
										<th class="text-center">Charges ($)</th>
										<th class="text-center">action</th>
									</tr>
								</thead>
								<tbody>
									<tr>
										<td class="text-center">
											<div class="tbleimg">
												<img src={require('./../../img/mealimg1.png')} class="img-fluid" alt="Meal Image" />
											</div>
										</td>
										<td class="text-center">
											Breakfast
										</td>
										<td class="text-center">
											Urban Styled Apt.
										</td>
										<td class="text-center">
											7-8 am
										</td>
										<td class="text-center">
											$12/month
										</td>
										<td class="text-center">
											<button class="btn btn-sm btn-secondary">Book</button>
										</td>
									</tr>
									<tr>
										<td class="text-center">
											<div class="tbleimg">
												<img src={require('./../../img/mealimg1.png')} class="img-fluid" alt="Meal Image" />
											</div>
										</td>
										<td class="text-center">
											Breakfast
										</td>
										<td class="text-center">
											Urban Styled Apt.
										</td>
										<td class="text-center">
											7-8 am
										</td>
										<td class="text-center">
											$12/month
										</td>
										<td class="text-center">
											<button class="btn btn-sm btn-secondary">Book</button>
										</td>
									</tr>
									<tr>
										<td class="text-center">
											<div class="tbleimg">
												<img src={require('./../../img/mealimg1.png')} class="img-fluid" alt="Meal Image" />
											</div>
										</td>
										<td class="text-center">
											Breakfast
										</td>
										<td class="text-center">
											Urban Styled Apt.
										</td>
										<td class="text-center">
											7-8 am
										</td>
										<td class="text-center">
											$12/month
										</td>
										<td class="text-center">
											<button class="btn btn-sm btn-secondary">Book</button>
										</td>
									</tr>
									<tr>
										<td class="text-center">
											<div class="tbleimg">
												<img src={require('./../../img/mealimg1.png')} class="img-fluid" alt="Meal Image"/>
											</div>
										</td>
										<td class="text-center">
											Breakfast
										</td>
										<td class="text-center">
											Urban Styled Apt.
										</td>
										<td class="text-center">
											7-8 am
										</td>
										<td class="text-center">
											$12/month
										</td>
										<td class="text-center">
											<button class="btn btn-sm btn-secondary">Book</button>
										</td>
									</tr>
								</tbody>
							</table>
						</div>
					</div>
				</div>
</div>
    );
}

export default MealPlans;