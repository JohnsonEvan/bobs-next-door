import React from "react"
import Store from "./Store"

function StoreList({storeList}) {

    return(
        <table>
            <tbody>
                <tr>
                    <th className="row-name">
                        Name
                    </th>
                    <th>
                        Image
                    </th>
                    <th>
                        Season
                    </th>
                    <th>
                        Episode
                    </th>
                </tr>
                {
                    storeList.map(stores => {
                        return <store key={stores.id} stores={stores}/>
                    })
                }
            </tbody>
        
        </table>
    );
}

export default StoreList;