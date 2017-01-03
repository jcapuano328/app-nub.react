import RNFS from 'react-native-fs';
import log from './log';
//var log = require('./log');
//var RNFS = require('react-native-fs');
let PATH = RNFS.DocumentDirectoryPath + '/';

module.exports = (file) => {
	return {
		load() {
			// read the file
			let path = PATH + file;
			log.trace('Load from ' + path);
			return RNFS.readFile(path)
			.then((data) => {
				if (data) {
					log.trace('Data retrieved');
					data = JSON.parse(data);
					//log.trace(data);
					return data;
				}
				log.trace('No data');
				return null;
			})
			.catch((err) => {
				log.warn(err.message);
				return null;
			});
		},
		save(data) {
			// write the file
			let path = PATH + file;
			log.trace('Save to ' + path);
			//log.trace(data);
			return RNFS.writeFile(path, JSON.stringify(data))
			.then((success) => {
				log.trace('Data saved');
			})
			.catch((err) => {
				log.warn(err.message);
			});
		},
		remove() {
			let path = PATH + file;
			log.trace('Remove from ' + path);
			return RNFS.unlink(path)
			.then((result) => {
		    	let success = result[0], ipath = result[1];
				log.trace('FILE DELETED', success, ipath);
			})
			// `unlink` will throw an error, if the item to unlink does not exist
			.catch((err) => {
				log.warn(err.message);
			});
		},
		sorter(orderby) {
		    orderby = orderby || [];
		    return (l,r) => {
		        let keys = orderby.slice(0);
		        let res = 0;
		        while (res == 0 && keys.length > 0) {
		            let key = keys.shift();
		            if (l[key] < r[key]) {
		                res = -1;
		            } else if (l[key] > r[key]) {
		                res = 1;
		            }
		        }
		        return res;
		    }
		},
		comparer(filter) {
		    filter = filter || {};
		    let filterprops = Object.keys(filter);
		    return (item) => {
		        return filterprops.every((prop) => filter[prop] == item[prop]);
		    }
		},
		select(filter, orderby) {
		    return this.load()
		    .then((data) => {
		        return (data || []).filter(this.comparer(filter)).sort(this.sorter(orderby));
		    });
		}
	};
};
