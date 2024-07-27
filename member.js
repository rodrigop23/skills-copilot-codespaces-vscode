function skillsMember() {
  const member = this.member;
  const skills = member.skills;
  const skillsArray = [];
  skills.forEach((skill) => {
    skillsArray.push(skill.name);
  });
  return skillsArray;
}