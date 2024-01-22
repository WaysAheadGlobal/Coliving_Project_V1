

function RewardHistory() {
    return(
        <div class="content-area">
				<h4 class="content-title backitem">
					<span> MY REWARD HISTORY</span>
					<span><a href="/user/loyalty-points"><i class="fa fa-solid fa-angles-left"></i>&nbsp; Back</a></span>
				</h4>
				<div class="profileform">
					<div class="row">
						<div class="col-12">
							<div class="historypoints">
								<label>my reward points</label>
								<span>350</span>
							</div>
						</div>
						<div class="col-12 my-5 text-end">
							<p class="mb-0">Length of Stay : 4 Months</p>
						</div>
						<div class="col-12">
							<div class="rewardtable">
								<div class="table-responsive">
									<table class="table" cellpadding="0" cellspacing="0">
										<thead>
											<tr>
												<th class="text-center">SnO.</th>
												<th class="text-center">Date</th>
												<th class="text-center">Description</th>
												<th class="text-center">Points Earned</th>
											</tr>
										</thead>
										<tbody>
											<tr>
												<td class="text-center">1</td>
												<td class="text-center">27 Oct 2023</td>
												<td class="text-center">Car Pooling</td>
												<td class="text-center">50</td>
											</tr>
											<tr>
												<td class="text-center">2</td>
												<td class="text-center">31 Oct 2023</td>
												<td class="text-center">Referrals</td>
												<td class="text-center">30</td>
											</tr>
											<tr>
												<td class="text-center">3</td>
												<td class="text-center">03 Dec 2023</td>
												<td class="text-center">Volunteering</td>
												<td class="text-center">40</td>
											</tr>
											<tr>
												<td class="text-center">4</td>
												<td class="text-center">27 Dec 2023</td>
												<td class="text-center">Car Pooling</td>
												<td class="text-center">50</td>
											</tr>
										</tbody>
									</table>
								</div>
							</div>
						</div>
					</div>
				</div>
</div>
    )
}

export default RewardHistory;