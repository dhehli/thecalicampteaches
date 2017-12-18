import config from 'config';
import rethinkdbdash from 'rethinkdbdash';

const rethinkDB = rethinkdbdash(config.get('rethinkdbtest'));

export default rethinkDB;
