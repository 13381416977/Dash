package dash.repository;

import dash.model.Form;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;//    @Query(value = "select",nativeQuery = true)

public interface FormRepository extends JpaRepository<Form, String> {

  @Query(value = "select count(*) from  Form s where s.isDeleted=0 and s.folStatus not in ('CANCEL','*E')")
  int allCount();

  @Query(value = "select to_char(s.COF007_CREATE_S,'yyyy-mm') mouth,count(*) amount from VCOF007_FORM s where s.COF007_IS_DEL_F=0 and s.COF007_FOL_STATUS not in ('*E')"
              + "group by to_char(s.COF007_CREATE_S,'yyyy-mm') order by to_char(s.COF007_CREATE_S,'yyyy-mm') desc",nativeQuery = true)
  List<Object[]> mCount();

  @Query(value = "select to_char(s.COF007_LAST_UPDT_S,'yyyy-mm') mouth,sum(s.COF007_ON_THE_ROAD_PRICE) income from VCOF007_FORM s where s.COF007_IS_DEL_F=0 "
              + "group by to_char(s.COF007_LAST_UPDT_S,'yyyy-mm') order by to_char(s.COF007_LAST_UPDT_S,'yyyy-mm') desc",  nativeQuery = true)
  List<Object[]> income();

  @Query(value = "select s.COF007_FOL_STATUS status,count(*) amount from VCOF007_FORM s where s.COF007_IS_DEL_F=0 group by s.COF007_FOL_STATUS",nativeQuery = true)
  List<Object[]> status();

  @Query(value = "select s.COF007_PROVINCE province ,count(*) amount from VCOF007_FORM s where s.COF007_IS_DEL_F=0 " +
          "group by s.COF007_PROVINCE order by count(*) desc",nativeQuery = true)
  List<Object[]> province();

  @Query(value = "select to_char(s.COF007_CREATE_S,'yyyy-mm') mouth,round((avg(TO_NUMBER(to_date(to_char(s.COF007_LAST_UPDT_S,'yyyy-mm-dd'),'yyyy-mm-dd')-" +
          "to_date(to_char(s.COF007_CREATE_S,'yyyy-mm-dd'),'yyyy-mm-dd'))))*24,1) \"average process hour\" from VCOF007_FORM s where s.COF007_IS_DEL_F=0 " +
          "group by to_char(s.COF007_CREATE_S,'yyyy-mm') order by to_char(s.COF007_CREATE_S,'yyyy-mm') desc",nativeQuery = true)
  List<Object[]> process();

  @Query(value = "select s.COF007_PLAN_CATEGORY,count(*) from VCOF007_FORM s where s.COF007_IS_DEL_F=0 group by s.COF007_PLAN_CATEGORY",nativeQuery = true)
  List<Object[]> source();


}
