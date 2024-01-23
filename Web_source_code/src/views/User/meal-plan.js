import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

function MealPlans() {
	const confirm = (e) => {
        toast.success('Meal Plan Booked Successfully.', {
            position: toast.POSITION.TOP_RIGHT,
        });
    }

    return(
        <div class="content-area">
			<ToastContainer />
				<link
					rel="stylesheet"
					href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;700&display=swap"
				></link>
				<h4 class="content-title">Meal Plans</h4>
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
											<button class="btn btn-sm btn-secondary" onClick={confirm}>Book</button>
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
											$14/month
										</td>
										<td class="text-center">
											<button class="btn btn-sm btn-secondary" onClick={confirm}>Book</button>
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
											$16/month
										</td>
										<td class="text-center">
											<button class="btn btn-sm btn-secondary" onClick={confirm}>Book</button>
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
											$18/month
										</td>
										<td class="text-center">
											<button class="btn btn-sm btn-secondary" onClick={confirm}>Book</button>
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