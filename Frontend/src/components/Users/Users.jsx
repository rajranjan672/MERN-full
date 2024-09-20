import React from "react";
import UsersCustom from "../Custom hooks/UsersCustom";

const Users = () => {
  const { users } = UsersCustom();
  console.log("u", users);

  return (
    <div className="container-fluid h-100">
      <div className="row">
        <div className="col-2 card">
        <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Excepturi
            neque reprehenderit sequi modi hic nam explicabo dolor iure
            consequuntur ullam, nesciunt esse delectus cupiditate quae? Deleniti
            accusantium quae consectetur tenetur ipsa illo dolor mollitia ab,
            sed natus! Deserunt optio, officiis magni debitis eligendi voluptate
            excepturi voluptas error deleniti similique veniam veritatis culpa,
            minus numquam hic quasi sit pariatur ad velit. Error minima,
            repudiandae recusandae assumenda, soluta provident ea voluptatum
            consequuntur obcaecati corporis aliquid, totam doloribus eius!
            Placeat, ducimus dolor quam eum aspernatur odio quas blanditiis,
            ipsam distinctio animi earum porro nisi magnam vitae, architecto
            quos dignissimos quidem ullam suscipit! Voluptatibus necessitatibus
            blanditiis minima quo saepe! Optio hic error dolore eius provident
            laudantium commodi dolores alias repellat tenetur? Consequuntur a
            cum architecto deleniti libero sint. Culpa doloribus totam, sunt
            cumque praesentium suscipit aliquam? Consequuntur, ducimus aperiam
            blanditiis maxime possimus, porro autem architecto iusto saepe
            nostrum dolores ex illo. Laborum, magni. Recusandae, ullam beatae!
            Amet placeat et sunt consequatur ducimus natus deserunt cumque atque
            rem, vitae voluptatum sapiente assumenda voluptate accusamus!
            Deleniti quaerat, iusto modi nam, sapiente maiores quae porro illo
            odit soluta temporibus dicta atque sint quasi suscipit aut fugit!
            Beatae omnis itaque doloribus minima numquam fugit magnam a,
            explicabo nulla animi cupiditate perferendis rem nostrum
            exercitationem suscipit in quod repellat eaque atque velit? Hic
            magni eos in accusantium doloremque fugiat aliquam quae ad id
            incidunt eveniet eum quo a commodi cum autem nemo fugit odio
            voluptatem, vitae est placeat deserunt veniam. Pariatur minima
            dolores ipsum soluta cupiditate voluptas corporis animi expedita nam
            labore facilis earum doloribus doloremque ea a consequatur in odit
            nihil, nulla mollitia ratione magnam impedit dolor repellat. Odio
            perferendis expedita blanditiis, delectus ullam cupiditate rerum
            voluptatem et cumque consequatur neque adipisci, nostrum totam
            reiciendis fuga sit, aliquam quaerat officiis numquam? Ea asperiores
            deserunt velit dolores non, ipsam sapiente neque nihil eaque laborum
            repellendus. Necessitatibus eaque expedita veniam est voluptatibus
            dolores enim error explicabo quia provident ea reiciendis, alias
            temporibus consectetur voluptatum iure reprehenderit sapiente velit
            cupiditate nobis voluptates similique! Voluptate eaque assumenda
            repellat, quis cum maxime temporibus aspernatur harum doloremque
            impedit vero atque incidunt nam provident quam magnam aperiam
            adipisci ad rerum nobis debitis porro nihil. Esse doloremque
            cupiditate, similique reiciendis architecto impedit sunt illo
            expedita adipisci quisquam excepturi est cum non fugiat. Pariatur
            molestiae reiciendis modi nesciunt debitis sapiente in libero magnam
            nobis? Nam quidem illo repudiandae harum earum nemo similique cumque
            sequi quas. Nisi, recusandae.
          </p>
        </div>
          
      
      <div className="col-10">
        <table className="table table-striped">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Name</th>
              <th scope="col">Email</th>
            </tr>
          </thead>
          <tbody>
            {users.map((item, index) => {
              return (
                <tr key={item.id} >
                  <td>{index + 1}</td>
                  <td>{item.name}</td>
                  <td>{item.email}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      </div>
    </div>
  );
};

export default Users;
