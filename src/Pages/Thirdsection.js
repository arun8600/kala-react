import React from 'react'

function Thirdsection() {
    return (
        <>
            <div className="table-section">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 col-md-12 col-xl-12 col-sm-12">
                            <div className="rounded-tbl" style={{overflowX:'auto',whiteSpace:'nowrap'}}>
                                <table className="table" style={{width:'100%'}}>
                                    <thead>
                                        <tr>
                                            <th scope="col">Staked Amount</th>
                                            <th scope="col">Stake Date</th>
                                            <th scope="col">Unstake Date</th>
                                            <th scope="col">Earn Reward</th>
                                            <th scope="col">Harvest</th>
                                            <th scope="col"></th>
                                            <th scope="col"></th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td style={{color:'#25e72f'}}>1.298.009</td>
                                            <td>Jan 22. 2021</td>
                                            <td>Jan 21, 2021</td>
                                            <td>BUSD</td>
                                            <td>2.928 Kala</td>
                                            <td><a href="" className="sr-btn">Unstake</a></td>
                                            <td><a href="" className="sr-btn-6">Harverst</a></td>

                                        </tr>
                                   
                                            <tr>
                                                <td style={{color:'#25e72f'}}>1.298.009</td>
                                                <td>Jan 22. 2021</td>
                                                <td>Jan 21, 2021</td>
                                                <td>BUSD</td>
                                                <td>2.928 Kala</td>
                                                <td><a href="" className="sr-btn">Unstake</a></td>
                                                <td><a href="" className="sr-btn-6">Harverst</a></td>
                                            </tr>

                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Thirdsection
