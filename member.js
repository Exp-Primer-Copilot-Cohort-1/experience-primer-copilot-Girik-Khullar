function skillsMember() {
  return {
    name: 'skillsMember',
    type: 'member',
    path: 'skills',
    title: 'Skills',
    description: 'Skills of the member',
    fields: [
      {
        name: 'name',
        type: 'string',
        title: 'Name',
        description: 'Name of the skill',
        required: true,
      },
      {
        name: 'level',
        type: 'number',
        title: 'Level',
        description: 'Level of the skill',
        required: true,
      },
    ],
  };
}