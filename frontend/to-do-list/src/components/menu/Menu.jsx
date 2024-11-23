import React, { useEffect } from "react";
import { useState } from "react";
import "../menu/Menu.css";
import ModalCategory from "../modalCategory/ModalCategory";
import { MdOutlineArrowRight } from "react-icons/md";
import { TbPointFilled } from "react-icons/tb";
import { GoPlus } from "react-icons/go";
import { FaLinkedinIn, FaGithub } from "react-icons/fa6";
import { fetchTags, createTag } from "../../store/actions/api";
function Menu() {
  const [menuOpen, setMenuOpen] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [tags, setTags] = useState([]);
  const [newTagData, setNewTagData] = useState({
    tag_name: "",
  });
  const handleModalToggle = () => {
    setShowModal(!showModal);
  };

  const handleOpenMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const handleCreateTag = async (e) => {
    e.preventDefault();
    try {
      const newTag = await createTag(newTagData);
      setTags((prevTags) => [...prevTags, newTag]);
      setNewTagData({
        tag_name: "",
      });
      handleModalToggle();
    } catch (error) {
      console.error("Error creating new tag:", error);
    }
  };

  useEffect(() => {
    const getTags = async () => {
      try {
        const result = await fetchTags();
        /* console.log(result); */
        setTags(result);
      } catch (error) {
        console.error("Error getting tags:", error);
      }
    };

    getTags();
  }, []);

  useEffect(() => {
    const updateTags = async () => {
      const result = await fetchTags();
      setTags(result);
    };
    updateTags();
  }, [newTagData]);

  return (
    <div className="d-flex menu">
      {!menuOpen && (
        <button className="btn-menu" type="button" onClick={handleOpenMenu}>
          <MdOutlineArrowRight />
        </button>
      )}
      {menuOpen && (
        <div className="d-flex menu-hidden">
          <div className="d-flex flex-column options">
            <div className="icon">
              <h1>TAREAS</h1>
            </div>
            <div>
              <ul className="d-flex flex-column category">
                {tags.map((tag) => (
                  <li key={tag.tag_id}>
                    <TbPointFilled />
                    {tag.tag_name}
                  </li>
                ))}
                <li>
                  <button
                    className="btn-tag d-flex"
                    data-bs-toggle="modal"
                    data-bs-target="#categoryModal"
                    onClick={handleModalToggle}
                  >
                    <GoPlus />
                    Agregar categoría
                  </button>
                </li>
              </ul>
              <ModalCategory
                onClose={handleModalToggle}
                handleCreateTag={handleCreateTag}
                newTagData={newTagData}
                setNewTagData={setNewTagData}
                showModal={showModal}
                setShowModal={setShowModal}
              />
            </div>
            
          </div>
          <button className="btn-menu" type="button" onClick={handleOpenMenu}>
            <MdOutlineArrowRight />
          </button>
        </div>
      )}
    </div>
  );
}

export default Menu;
