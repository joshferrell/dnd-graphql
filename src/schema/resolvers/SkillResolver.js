import { GraphQLNonNull, GraphQLID } from 'graphql';
import { fetchSkill } from '../actions/index';
import { SkillType } from '../types/index';

const SkillResolver = {
    skill: {
        type: SkillType,
        description: 'Get a single skill type',
        args: {
            id: {
                type: new GraphQLNonNull(GraphQLID),
                description: 'Skill id'
            }
        },
        resolve: ((_, { id }) => fetchSkill(id))
    }
};

export default SkillResolver;
