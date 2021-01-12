package dash.repository;


import dash.model.Form;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.Date;
import java.util.List;

public interface MonthRepository extends JpaRepository<Form, String> {

    @Query(value = "select s.COF007_DATA_SOURCES,count(*) from VCOF007_FORM s where s.COF007_IS_DEL_F=0 group by s.COF007_DATA_SOURCES",nativeQuery = true)
    List<Object[]> source();

    @Query(value = "select s.COF007_DATA_SOURCES,count(*) from VCOF007_FORM s where s.COF007_DATA_SOURCES in (?1) and s.COF007_IS_DEL_F=0 " +
            "and s.COF007_CREATE_S>?2 group by s.COF007_DATA_SOURCES",nativeQuery = true)
    List<Object[]> selectSource(List<String> source,Date date);

    @Query(value = "select s.COF007_DATA_SOURCES status,count(*) amount from VCOF007_FORM s where s.COF007_IS_DEL_F=0 " +
            " and s.COF007_CREATE_S>?1 group by s.COF007_DATA_SOURCES",nativeQuery = true)
    List<Object[]> monthSource(Date date);

    @Query(value = "select s.COF007_FOL_STATUS status,count(*) amount from VCOF007_FORM s where s.COF007_IS_DEL_F=0 " +
            " and s.COF007_CREATE_S>?1 group by s.COF007_FOL_STATUS",nativeQuery = true)
    List<Object[]> monthStatus(Date date);

    @Query(value = "select s.COF007_PLAN_CATEGORY status,count(*) amount from VCOF007_FORM s where s.COF007_IS_DEL_F=0 " +
            " and s.COF007_CREATE_S>?1 group by s.COF007_PLAN_CATEGORY",nativeQuery = true)
    List<Object[]> monthCategory(Date date);

    @Query(value = "select s.COF007_PLAN_CATEGORY,count(*) from VCOF007_FORM s where s.COF007_PLAN_CATEGORY in (?1) and s.COF007_IS_DEL_F=0 " +
            "and s.COF007_CREATE_S>?2 group by s.COF007_PLAN_CATEGORY",nativeQuery = true)
    List<Object[]> selectCategory(List<String> category,Date date);

  @Query(value = "select to_char(s.COF007_CREATE_S,'yyyy-mm-dd') day,count(*) from VCOF007_FORM s where s.COF007_IS_DEL_F=0 and s.COF007_DATA_SOURCES in (?1)"
              + " and s.COF007_CREATE_S>?2 group by to_char(s.COF007_CREATE_S,'yyyy-mm-dd')  order by to_char(s.COF007_CREATE_S,'yyyy-mm-dd') desc",
      nativeQuery = true)
  List<Object[]> dailySource(List<String> source, Date date);
}
