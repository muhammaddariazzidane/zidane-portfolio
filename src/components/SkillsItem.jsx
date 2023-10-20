/* eslint-disable react/prop-types */
export default function SkillsItem(props) {
  const { Box, SkillsImage, skill, motion } = props;
  return (
    <Box
      as={motion.div}
      initial={{ translateY: 50 }}
      whileInView={{
        translateY: 0,
      }}
      viewport={{ once: true }}
    >
      <SkillsImage
        image={skill.image}
        size={skill.size}
        title={skill.title}
        rounded={skill.rounded ? skill.rounded : null}
      />
    </Box>
  );
}
