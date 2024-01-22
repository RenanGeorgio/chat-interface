//@ts-nocheck
import { useContext, useState, useEffect } from "react";
//import { useDispatch, useSelector, connect } from 'react-redux';
//import { clientActions } from './store';
//import { getClient } from './common/selectors';
import { AuthContext } from "@contexts/AuthContext";
import setDataTable from '@helpers/data-table';
import { SupplyfyApi } from "@services";

import { AuthContextType } from '@typograph/interfaces';

const CachingController = () => {
  //const authenticated = useSelector((state) => !!state.session.user);
  //const dispatch = useDispatch();
  //const user = useSelector(getClient);

  const { isAuthenticated, dataSet }: AuthContextType = useContext(AuthContext);
  const data = null;
  useEffect(() => {
    if (data) {
      console.log(data);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isAuthenticated]);

  return null;
};

// export default connect()(CachingController);
export default CachingController;
