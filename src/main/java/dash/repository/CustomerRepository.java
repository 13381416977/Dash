package dash.repository;


import dash.model.Form;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.Date;
import java.util.List;

public interface CustomerRepository extends JpaRepository<Form, String> {

    @Query(value = "select s.COF007_GENDER ,count(*) amount from VCOF007_FORM s where s.COF007_IS_DEL_F=0 " +
            " and s.COF007_CREATE_S>?1 group by s.COF007_GENDER order by amount desc ",nativeQuery = true)
    List<Object[]> sex(Date date);

    @Query(value = "select s.COF007_MARITAL_TEXT ,count(*) amount from VCOF007_FORM s where s.COF007_IS_DEL_F=0 " +
            " and s.COF007_CREATE_S>?1 group by s.COF007_MARITAL_TEXT order by amount desc",nativeQuery = true)
    List<Object[]> marry(Date date);

    @Query(value = "select s.COF007_RSD_C_TEXT ,count(*) amount from VCOF007_FORM s where s.COF007_IS_DEL_F=0 " +
            " and s.COF007_CREATE_S>?1 group by s.COF007_RSD_C_TEXT order by amount desc",nativeQuery = true)
    List<Object[]> house(Date date);

    @Query(value = "select s.COF007_EMPL_LEV ,count(*) amount from VCOF007_FORM s where s.COF007_IS_DEL_F=0 " +
            " and s.COF007_CREATE_S>?1 group by s.COF007_EMPL_LEV order by amount desc",nativeQuery = true)
    List<Object[]> job(Date date);

    @Query(value = "select s.birthday from Form s where s.isDeleted=0 and s.birthday is not null and s.createDate>?1")
    List<Date> birthday(Date date);

    @Query(value = "select s.income from Form s where s.income is not null and s.isDeleted=0 and s.createDate>?1")
    List<Long> income(Date date);
}
