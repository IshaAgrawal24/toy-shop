import { Modal } from "@mui/material";
import { useContext } from "react";
import CartContext from "../../../../Context";
import { X } from "react-feather";
import "./ModalSection.css";

export const RemoveFromBag = (_props) => {
  const { addCart, setAddCart, selectList, setSelectList } =
    useContext(CartContext);
  const { openRemoveModal, setRemoveModal } = _props;

  const removeFunc = () => {
    setAddCart([]);
    setRemoveModal(false);
  };

  const wishlistFunc = () => {
    addCart.forEach((item) => {
      setSelectList(
        selectList.filter((prod) => {
          if (prod.id === item.id) {
            prod.wishlist = 1;
          }
          return item;
        })
      );
    });
    removeFunc();
  };
  return (
    <Modal open={openRemoveModal} onClose={() => setRemoveModal(false)}>
      <div className="modal__main">
        <div className="modal__child">
          <span>
            <X onClick={() => setRemoveModal(false)} />
          </span>
          <h4>Remove {addCart.length} items</h4>
          <p>
            Are you sure you want to remove {addCart.length} items from bag?
          </p>
          <div className="modal__action">
            <button id="remove" onClick={() => removeFunc()}>
              Remove
            </button>
            <div>|</div>
            <button id="wishlist" onClick={() => wishlistFunc()}>
              Move to wishlist
            </button>
          </div>
        </div>
      </div>
    </Modal>
  );
};

export const MovetoWishlist = (_props) => {
  const { addCart, selectList, setSelectList, setAddCart } =
    useContext(CartContext);
  const { openWishlistModal, setWishlistModal } = _props;

  const removeFunc = () => {
    setAddCart([]);
    setWishlistModal(false);
  };

  const wishlistFunc = () => {
    addCart.forEach((item) => {
      setSelectList(
        selectList.filter((prod) => {
          if (prod.id === item.id) {
            prod.wishlist = 1;
          }
          return item;
        })
      );
    });
    removeFunc();
  };

  return (
    <Modal open={openWishlistModal} onClose={() => setWishlistModal(false)}>
      <div className="modal__main">
        <div className="modal__child">
          <span>
            <X onClick={() => setWishlistModal(false)} />
          </span>
          <h4>Move {addCart.length} items to wishlist</h4>
          <p>Are you sure you want to move {addCart.length} items from bag?</p>
          <div className="modal__action">
            <button onClick={() => setWishlistModal(false)}>Cancel</button>
            <div>|</div>
            <button id="wishlist" onClick={() => wishlistFunc()}>
              Move to wishlist
            </button>
          </div>
        </div>
      </div>
    </Modal>
  );
};

export const CrossAction = (_props) => {
  const { openCrossModal, setCrossModal, id } = _props;
  const { addCart, setAddCart, selectList, setSelectList } =
    useContext(CartContext);

  const removeFunc = (id) => {
    setAddCart(
      addCart.filter((item) => {
        return item.id !== id;
      })
    );
    setCrossModal(false);
  };

  const wishlistFunc = () => {
    setSelectList(
      selectList.filter((item) => {
        if (item.id === id) {
          item.wishlist = 1;
        }
        return item;
      })
    );
    removeFunc(id);
  };
  return (
    <Modal open={openCrossModal} onClose={() => setCrossModal(false)}>
      <div className="modal__main">
        <div className="modal__child">
          <span>
            <X onClick={() => setCrossModal(false)} />
          </span>
          {addCart.map((item, index) => {
            if (id === item.id) {
              return (
                <div className="modal__content" key={index}>
                  <div className="img">{item.img}</div>
                  <div className="info">
                    <h4>Move from Bag</h4>
                    <p>Are you sure you want to move this item from bag?</p>
                  </div>
                </div>
              );
            }
          })}
          <div className="modal__action">
            <button onClick={() => removeFunc(id)}>Remove</button>
            <div>|</div>
            <button id="wishlist" onClick={() => wishlistFunc()}>
              Move to wishlist
            </button>
          </div>
        </div>
      </div>
    </Modal>
  );
};
