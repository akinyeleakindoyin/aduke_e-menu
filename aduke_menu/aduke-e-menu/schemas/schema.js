// First, we must import the schema creator
import createSchema from 'part:@sanity/base/schema-creator';

// Then import schema types from any plugins that might expose them
import schemaTypes from 'all:part:@sanity/base/schema-type';
import appetizers from './appetizers';
import maincourse from './maincourse';
import veganMaincourse from './veganMaincourse';
import lagosSpecials from './lagosSpecials';
import drinks from './drinks';
import sideDishes from './sideDishes';
import specialOrders from './specialOrders';
import veganAppetizers from './veganAppetizers';
import soups from './soups';

// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  // We name our schema
  name: 'default',
  // Then proceed to concatenate our document type
  // to the ones provided by any plugins that are installed
  types: schemaTypes.concat([
    /* Your types here! */
    appetizers,
    maincourse,
    lagosSpecials,
    drinks,
    sideDishes,
    specialOrders,
    soups,
    veganMaincourse,
    veganAppetizers,
  ]),
});
