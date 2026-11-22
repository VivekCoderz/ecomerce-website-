

const IndiviualCard = ({ pro,increaseQuantity ,addCart}) => {

  return (
    <div
      key={pro.id}
      style={{
        width: "250px",
        minHeight: "430px",
        border: "1px solid #ddd",
        borderRadius: "18px",
        overflow: "hidden",
        background: "white",
        boxShadow: "0 5px 20px rgba(0,0,0,0.15)",
        transition: "0.3s",
        cursor: "pointer",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = "translateY(-8px)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = "translateY(0px)";
      }}
    >
      {/* Image */}
      <div
        style={{
          height: "220px",
          background: "#f5f5f5",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <img
          src={pro.imageURL}
          alt="product"
          style={{
            height: "100%",
            width: "100%",
            objectFit: "cover",
          }}
        />
      </div>

      {/* Content */}
      <div style={{ padding: "15px" }}>
        <p
          style={{
            fontSize: "14px",
            color: "#555",
            height: "40px",
            overflow: "hidden",
          }}
        >
          {pro.description}
        </p>

        <p
          style={{
            color: "#777",
            fontSize: "13px",
            margin: "5px 0",
          }}
        >
          ⭐ {pro.reviews}
        </p>

        {/* Price */}
        <div>
          <span
            style={{
              color: "green",
              fontWeight: "bold",
              fontSize: "18px",
            }}
          >
            ₹{pro.price}
          </span>

          <span
            style={{
              marginLeft: "10px",
              color: "red",
              fontSize: "14px",
            }}
          >
            -{pro.discount}
          </span>
        </div>

        <p
          style={{
            margin: "5px 0",
            color: "gray",
            fontSize: "13px",
          }}
        >
          MRP:
          <span
            style={{
              textDecoration: "line-through",
              marginLeft: "5px",
            }}
          >
            ₹{pro.oldPrice}
          </span>
        </p>

        {/* Stock */}
        <span
          style={{
            background: "#e8ffe8",
            color: "green",
            padding: "5px 10px",
            borderRadius: "20px",
            fontSize: "12px",
          }}
        >
          Stock : {pro.stoke}
        </span>

        {/* Quantity */}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: "15px",
            marginTop: "15px",
          }}
        >
          <button
            style={btnStyle}
            onClick={() => {
              if (pro.quantity > 0) increaseQuantity(pro.id,-1);
            }}
          >
            -
          </button>

          <b>{pro.quantity}</b>

          <button
            style={btnStyle}
            onClick={() => {
              increaseQuantity(pro.id);
            }}
          >
            +
          </button>
        </div>

        {/* Cart Button */}
        <button
          style={{
            width: "100%",
            marginTop: "15px",
            padding: "12px",
            border: "none",
            borderRadius: "12px",
            background: "#2563eb",
            color: "white",
            fontSize: "15px",
            fontWeight: "bold",
            cursor: "pointer",
          }}

          onClick={()=>{addCart(pro.id)}}
        >
          Add To Cart 🛒
        </button>
      </div>
    </div>
  );
};

const btnStyle = {
  width: "35px",
  height: "35px",
  borderRadius: "50%",
  border: "none",
  background: "#eee",
  fontSize: "20px",
  cursor: "pointer",
};

export default IndiviualCard;
