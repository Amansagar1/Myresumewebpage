import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const SkillSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1
  };

  return (
    <Slider {...settings}>
      {skillsData.map((skill, index) => (
        <div key={index}>
          <h3>{skill.name}</h3>
          <div className="w-full bg-gray-700 h-2 rounded-full">
            <div
              className="bg-indigo-500 h-2 rounded-full"
              style={{ width: `${skill.percentage}%` }}
            ></div>
          </div>
        </div>
      ))}
    </Slider>
  );
};
export default SkillSlider;